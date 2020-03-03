import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PotasioComponent } from './potasio/potasio.component';
import { RojoComponent } from './colores/primarios/rojo/rojo.component';
import { RojoOscuroComponent } from './colores/primarios/rojo/rojo-oscuro/rojo-oscuro.component';
import { RojoClaroComponent } from './colores/primarios/rojo/rojo-claro/rojo-claro.component';
import { AzulComponent } from './colores/primarios/azul/azul.component';
import { AmarilloComponent } from './colores/primarios/amarillo/amarillo.component';
import { SecundariosComponent } from './colores/secundarios/secundarios.component';
import { NaranjaComponent } from './colores/secundarios/naranja/naranja.component';
import { VerdeComponent } from './colores/secundarios/verde/verde.component';
import { PrimariosComponent } from './colores/primarios/primarios.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { DirecFormComponent } from './direc-form/direc-form.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ArrastrarYSoltarComponent } from './arrastrar-ysoltar/arrastrar-ysoltar.component';
import { ArbolComponent } from './arbol/arbol.component';
import { TableroComponent } from './tablero/tablero.component';
import { TablaComponent } from './tabla/tabla.component';


const routes: Routes = [
  //{path:"userlatlng", component:AppComponent},
  //{path:"potasio", component:PotasioComponent},
  {
    path: "", component: NavegacionComponent,
    children: [
      { path: "address-form", component: DirecFormComponent },
      { path: "tree", component: ArbolComponent },
      { path: "drag-drop", component: ArrastrarYSoltarComponent },
      { path: "dashboard", component: TableroComponent},
      { path: "table", component: TablaComponent}
    ]
  }
  /*
  {
    path: "primarios", component: PrimariosComponent,
    children: [
      {
        path: "rojo", component: RojoComponent,
        children: [
          { path: "rojo-oscuro", component: RojoOscuroComponent },
          { path: "rojo-claro", component: RojoClaroComponent }
        ]
      },
      {
        path: "azul", component: AzulComponent
      },
      {
        path: "amarillo", component: AmarilloComponent
      }
    ]
  },
  {
    path: "secundarios", component: SecundariosComponent,
    children: [
      { path: "naranja", component: NaranjaComponent },
      { path: "verde", component: VerdeComponent }
    ]
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
