import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PruebaMainService } from './services/prueba-main.service';
import { PruebaMain2Service } from './services/prueba-main2.service';
import { PruebaMain3Service } from './services/prueba-main3.service';



@NgModule({
  declarations: [
    UsuariosComponent,
    RolesComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule
  ],
  providers: [PruebaMainService,
              PruebaMain2Service],
})
export class MainModule { }
