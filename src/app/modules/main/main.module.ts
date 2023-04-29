import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MainRountingModule } from './main-rounting.module';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { SearchComponent } from './pages/search/search.component';
import { UserService } from './services/user.service';
import { RolesService } from './services/roles.service';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    UsersComponent,
    RolesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MainRountingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService,
    RolesService
  ],
})
export class MainModule { }
