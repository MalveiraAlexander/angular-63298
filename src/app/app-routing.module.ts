import { DirectivosComponent } from './directivos/directivos.component';
import { HtmlComponent } from './pages/profesores/html/html.component';
import { AngularComponent } from './pages/profesores/angular/angular.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { ProfesoresComponent } from './pages/profesores/profesores.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'alumnos', component: AlumnosComponent, data: { type: 'Angular' }, title: 'Alumnos - Clase2' },
  { path: 'estudiantes', component: AlumnosComponent, data: { type: 'HTML' }, title: 'Estudiantes - Clase2', canActivate: [AuthGuard] },
  { path: 'profesores', children: [
    { path: '', component: ProfesoresComponent, title: 'Profesores - Clase2' },
    { path: 'angular', component: AngularComponent, title: 'Profesores Angular - Clase2' },
    { path: 'html', component: HtmlComponent, title: 'Profesores HTML - Clase2' },
  ]},
  { path: 'directivos', loadChildren: () => import('./directivos/directivos.module').then(m => m.DirectivosModule), component: DirectivosComponent, title: 'Directivos - Clase2' },
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: '404 - Clase2' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
