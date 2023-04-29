import { Injectable } from '@angular/core';

@Injectable()
export class Servicio1Service {

  constructor() { }

  getTime() {
    return new Date().getTime();
  }
}
