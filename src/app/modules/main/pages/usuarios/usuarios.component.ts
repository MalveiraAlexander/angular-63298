import { Component } from '@angular/core';
import { PruebaMainService } from '../../services/prueba-main.service';
import { PruebaSharedService } from 'src/app/modules/shared/services/prueba-shared.service';
import { PruebaMain3Service } from '../../services/prueba-main3.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  constructor(private pruebaMain: PruebaMainService, private pruebaShared: PruebaSharedService) { }
}
