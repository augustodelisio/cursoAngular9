import { Injectable } from '@angular/core';
import { CommonsModule } from './commons.module';

@Injectable({
  providedIn: CommonsModule
})
export class InnerModuleService {

  constructor() { }
}
