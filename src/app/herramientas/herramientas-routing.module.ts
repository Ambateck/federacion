import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AyudaComponent } from './utilidades/ayuda/ayuda.component';
import { BitacoraComponent } from './utilidades/bitacora/bitacora.component';
import { CertificadasComponent } from './utilidades/certificadas/certificadas.component';
import { EmpleosComponent } from './utilidades/empleos/empleos.component';
import { ExtraviadosComponent } from './utilidades/extraviados/extraviados.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { RecompensaComponent } from './utilidades/recompensa/recompensa.component';
import { ErroresComponent } from './utilidades/errores/errores.component';

const routes: Routes = [
  {
    path:'',
    children:[
      { path:'ayuda', component: AyudaComponent },
      { path: 'bitacora', component: BitacoraComponent },
      { path: 'certificadas', component: CertificadasComponent },
      { path: 'empleos', component: EmpleosComponent },
      { path: 'extraviados', component: ExtraviadosComponent},
      { path: 'mapa', component: MapaComponent},
      { path: 'recompensa', component: RecompensaComponent},
      { path: '**', component: ErroresComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerramientasRoutingModule { }
