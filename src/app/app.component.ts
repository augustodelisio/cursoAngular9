import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-dream-app';
  unavarmas = 'Titulo viejo';
  nomboton = 'Boton viejo';
  valorDeInput = 'Inserte texto';

  
  cambiarTodo():void
  {
    this.cambiarContenido();
    this.cambiarBoton();
    this.mostrarTexto();
  }
  cambiarContenido():void
  {
    if (this.unavarmas == 'Titulo nuevo')
      this.unavarmas = 'Titulo viejo';
    else
      this.unavarmas = 'Titulo nuevo';
  }
  cambiarBoton():void
  {
    if (this.nomboton == 'boton nuevo')
      this.nomboton = 'boton viejo';
    else
      this.nomboton = 'boton nuevo';
  }
  mostrarTexto():void
  {
    console.log(this.valorDeInput)
  }
  
}
