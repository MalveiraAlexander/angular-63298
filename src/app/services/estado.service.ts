import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {
  sendMessage: EventEmitter<string> = new EventEmitter<string>();
}
