import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRountingModule { }
