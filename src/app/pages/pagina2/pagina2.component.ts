import { Component, OnInit } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';
import { Servicio1Service } from 'src/app/services/servicio1.service';
import { Servicio2Service } from 'src/app/services/servicio2.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.scss'],
  providers: [Servicio2Service]
})
export class Pagina2Component implements OnInit {

  date: Date;
  message: string;
  constructor(private servicio2: Servicio2Service,
              private servicio1: Servicio1Service,
              private estadoService: EstadoService) { }

  ngOnInit(): void {
    this.getDate();
    this.estadoService.sendMessage.subscribe((message: string) => {
      this.message = message;
    });
  }

  getDate() {
    this.date = this.servicio2.getDate();
  }
}
