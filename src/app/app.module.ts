import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotasioComponent } from './potasio/potasio.component';

import { CommonsModule } from './commons/commons.module'

@NgModule({
  declarations: [
    AppComponent,
    PotasioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
