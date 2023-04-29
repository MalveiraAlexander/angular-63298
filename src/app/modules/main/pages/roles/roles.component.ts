import { Component } from '@angular/core';
import { PruebaMain3Service } from '../../services/prueba-main3.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  providers: [PruebaMain3Service]
})
export class RolesComponent {
  constructor(private pruebaMain3: PruebaMain3Service) { }
}
