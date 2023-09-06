import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'herramientas',
    loadChildren: () => import('./herramientas/herramientas.module').then( m => m.HerramientasModule )
  },
{
  path:'**',
  redirectTo: 'errores'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
