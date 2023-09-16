import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MiembrosComponent } from './miembros/miembros.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { QuienesComponent } from './quienes/quienes.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const rutas:Routes=[
  { path:'', component:BarraComponent },
  { path:'proyectos', component:ProyectosComponent },
  { path:'miembros', component:MiembrosComponent },
  { path: 'convenios', component:ConveniosComponent },
  { path: 'quienes', component:QuienesComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    ProyectosComponent,
    MiembrosComponent,
    ConveniosComponent,
    QuienesComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
