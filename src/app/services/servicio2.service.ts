import { Injectable } from '@angular/core';

@Injectable()
export class Servicio2Service {

  constructor() { }

  getDate() {
    console.log(new Date());

    return new Date();
  }
}
