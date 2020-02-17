import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from './services/placeholder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-dream-app';
  unavarmas = 'Titulo viejo';
  nomboton = 'Boton viejo';
  valorDeInput = 'Inserte texto';
  usuarios =[];
  
  constructor(private phService: PlaceholderService){}

  async ngOnInit(){
    //let usuarios = await this.phService.getUsers()
    //console.log(usuarios[0])
    //this.phService.getUsersAlt().subscribe(usu=>console.log(usu))
    this.phService.getUsersAlt().subscribe(usu=>this.usuarios = usu)
  }
  
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
