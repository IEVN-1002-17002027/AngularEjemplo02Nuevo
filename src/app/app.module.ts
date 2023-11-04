import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{MatButtonModule} from '@angular/material/button'
import{MatDividerModule} from '@angular/material/divider'
import{MatTableModule} from '@angular/material/table'
import{MatSidenavModule} from '@angular/material/sidenav'
import{MatToolbarModule} from '@angular/material/toolbar'
import{MatListModule} from '@angular/material/list'
import{MatIconModule} from '@angular/material/icon'
import{MatExpansionModule} from '@angular/material/expansion'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgregarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,

    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }