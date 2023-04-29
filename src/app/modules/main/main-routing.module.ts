import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { RolesComponent } from './pages/roles/roles.component';

const routes: Routes = [
  { path: 'users', component: UsuariosComponent, title: 'Usuarios' },
  { path: 'roles', component: RolesComponent, title: 'Roles' },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
