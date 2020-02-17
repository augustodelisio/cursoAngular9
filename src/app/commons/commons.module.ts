import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

const modules=[
  CommonModule,
    FormsModule,
    HttpClientModule
]
@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class CommonsModule { }
