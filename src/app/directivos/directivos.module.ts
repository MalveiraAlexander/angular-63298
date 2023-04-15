import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivosComponent } from './directivos.component';
import { DirectivosRoutingModule } from './directivos-routing.module';
import { RectorComponent } from './rector/rector.component';
import { DirectorComponent } from './director/director.component';
import {MatButtonModule} from '@angular/material/button';
import { MatematicasComponent } from './director/matematicas/matematicas.component';
import { FisicaComponent } from './director/fisica/fisica.component';
import { QuimicaComponent } from './director/quimica/quimica.component';


@NgModule({
  declarations: [
    RectorComponent,
    DirectorComponent,
    MatematicasComponent,
    FisicaComponent,
    QuimicaComponent
  ],
  imports: [
    CommonModule,
    DirectivosRoutingModule,
    MatButtonModule
  ]
})
export class DirectivosModule { }
