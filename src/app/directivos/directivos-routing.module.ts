import { RectorComponent } from './rector/rector.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DirectorComponent } from './director/director.component';
import { MatematicasComponent } from './director/matematicas/matematicas.component';
import { FisicaComponent } from './director/fisica/fisica.component';
import { QuimicaComponent } from './director/quimica/quimica.component';

const routes: Routes = [
  {path: 'rector', component: RectorComponent},
  {path: 'director', children: [
    {path: '', component: DirectorComponent},
    {path: 'matematicas', component: MatematicasComponent},
    {path: 'fisica', component: FisicaComponent},
    {path: 'quimica', component: QuimicaComponent},
  ]},
  {path: '', redirectTo: 'rector', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivosRoutingModule { }
