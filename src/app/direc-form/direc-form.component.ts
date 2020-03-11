import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { PlaceholderService } from '../services/placeholder.service';
import { Usuario, Address } from '../models/user.model'
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-direc-form',
  templateUrl: './direc-form.component.html',
  styleUrls: ['./direc-form.component.css']
})
export class DirecFormComponent implements OnInit {


  addressForm = this.fb.group({
    id: new FormControl({ value: null, disabled: true }),
    name: null,
    username: null,
    address: null,
    email: null,
    /*
    company: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    address2: null,
    city: [null, Validators.required],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]*/
  });
  dir: any;
  
  constructor(
    private fb: FormBuilder,
    private placeh: PlaceholderService,
    private rutaActiva: ActivatedRoute) {
    rutaActiva.params.subscribe((s: UrlSegment[]) => {
      console.log(s['id'])
      this.dir = s['id']
      
    }
    )
  }

  async ngOnInit() {
    let usuario = await this.placeh.getOneUser(this.dir);
    console.log(usuario);
    this.addressForm.controls.id.setValue(usuario.id)
    this.addressForm.controls.name.setValue(usuario.name)
    this.addressForm.controls.username.setValue(usuario.username)
    this.addressForm.controls.address.setValue(usuario.address.city)
    this.addressForm.controls.email.setValue(usuario.email)

  }

  usu: Usuario = {} as Usuario;
  onSubmit() {
    console.log(this.addressForm.controls.name.value)
    let myusu: Usuario = {} as Usuario;
    myusu.id = this.addressForm.controls.id.value
    myusu.name = this.addressForm.controls.name.value
    myusu.username = this.addressForm.controls.username.value
    myusu.address = {} as Address;
    myusu.address.city = this.addressForm.controls.address.value
    myusu.email = this.addressForm.controls.email.value
    this.placeh.updateOneUser(myusu.id, myusu).subscribe(x => { console.log(x) })

  }
}
