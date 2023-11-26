import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from 'src/app/interfaces/utl';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  imageWidth:number=50;
  imgeMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';
  alumnoTitle!:String;
  dataSource:any=[];

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  alumnosIric:AlumnosUtl[]=[
    {
      matricula:1234,
      nombre:'Pedro',
      apaterno:'Lopez',
      amaterno:'Muñoz',
      correo:'asas@jkk'
    },
    {
      matricula:2222,
      nombre:'Juan',
      apaterno:'Lopez',
      amaterno:'Muñoz',
      correo:'asas@jkk'
    },
    {
      matricula:3333,
      nombre:'Diana',
      apaterno:'Lopez',
      amaterno:'Muñoz',
      correo:'asas@jkk'
    }
  ]

  ngOnInit(): void{
    this.dataSource=this.alumnosIric
  }

}
