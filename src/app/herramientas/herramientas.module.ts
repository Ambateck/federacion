import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerramientasRoutingModule } from './herramientas-routing.module';
import { CertificadasComponent } from './utilidades/certificadas/certificadas.component';
import { MapaComponent } from './utilidades/mapa/mapa.component';
import { RecompensaComponent } from './utilidades/recompensa/recompensa.component';
import { ExtraviadosComponent } from './utilidades/extraviados/extraviados.component';
import { AyudaComponent } from './utilidades/ayuda/ayuda.component';
import { BitacoraComponent } from './utilidades/bitacora/bitacora.component';
import { EmpleosComponent } from './utilidades/empleos/empleos.component';
import { ErroresComponent } from './utilidades/errores/errores.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CertificadasComponent,
    MapaComponent,
    RecompensaComponent,
    ExtraviadosComponent,
    AyudaComponent,
    BitacoraComponent,
    EmpleosComponent,
    ErroresComponent
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule,
    FormsModule
  ]
})
export class HerramientasModule { }
