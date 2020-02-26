import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service'

@Component({
  selector: 'app-potasio',
  templateUrl: './potasio.component.html',
  styleUrls: ['./potasio.component.css']
})
export class PotasioComponent implements OnInit {
  texto = 'COMPONENTE SECUNDARIA'
  usuarios =[];

  constructor(private phService: PlaceholderService){}

  async ngOnInit(){
    //let usuarios = await this.phService.getUsers()
    //console.log(usuarios[0])
    //this.phService.getUsersAlt().subscribe(usu=>console.log(usu))
    this.phService.getUsersAlt().subscribe(usu=>this.usuarios = usu)
  }
  vaciarLista():void
  {
    this.usuarios = [];
  }
}
