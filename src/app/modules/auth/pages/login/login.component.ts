import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PruebaMainService } from 'src/app/modules/main/services/prueba-main.service';
import { PruebaAuthService } from '../../services/prueba-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private pruebaAuthService: PruebaAuthService) {
  }
  goToMain() {
    this.router.navigate(['main']);
  }
}
