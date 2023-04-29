import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from 'src/app/services/servicio1.service';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.scss']
})
export class Pagina1Component implements OnInit {

  time: number;
  mensajeHijo: string;
  constructor(private servicio1: Servicio1Service) { }

  ngOnInit(): void {
    this.getTime();
  }

  getMensajeHijo(mensaje: string) {
    this.mensajeHijo = mensaje;
  }

  getTime() {
    this.time = this.servicio1.getTime();
  }

}
