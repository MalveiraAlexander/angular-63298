import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {
  @Input() query: string;
  @Output() clickHijo: EventEmitter<string> = new EventEmitter<string>();

  constructor(private estadoService: EstadoService) { }

  click() {
    let message: string = 'Nooo! no puede ser!!';
    this.clickHijo.emit(message);
    this.estadoService.sendMessage.emit(message);
  }
}
