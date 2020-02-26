import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimariosComponent } from './primarios/primarios.component';
import { SecundariosComponent } from './secundarios/secundarios.component';
import { RojoComponent } from './primarios/rojo/rojo.component';
import { AzulComponent } from './primarios/azul/azul.component';
import { AmarilloComponent } from './primarios/amarillo/amarillo.component';
import { VerdeComponent } from './secundarios/verde/verde.component';
import { NaranjaComponent } from './secundarios/naranja/naranja.component';
import { RojoOscuroComponent } from './primarios/rojo/rojo-oscuro/rojo-oscuro.component';
import { RojoClaroComponent } from './primarios/rojo/rojo-claro/rojo-claro.component'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PrimariosComponent,
    SecundariosComponent,
    RojoComponent,
    AzulComponent,
    AmarilloComponent,
    VerdeComponent,
    NaranjaComponent,
    RojoOscuroComponent,
    RojoClaroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class ColoresModule { }
