import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';

const routes: Routes = [
  { path: '', component: Pagina1Component, title: 'Página 1', outlet: 'pagina1' },
  { path: '', component: Pagina2Component, title: 'Página 2', outlet: 'pagina2' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
