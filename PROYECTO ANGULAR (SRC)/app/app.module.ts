import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioReservaCitaComponent } from './formulario-reserva-cita/formulario-reserva-cita.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { DirectorioComponent } from './directorio/directorio.component';

import {Routes, RouterModule } from '@angular/router';
import { PaginaFisioterapiaComponent } from './pagina-fisioterapia/pagina-fisioterapia.component';  

const rutas:Routes= [
  {
    path:'formulario',
    component:FormularioReservaCitaComponent
  },
  {
    path:'directorio',
    component:DirectorioComponent
  },
  {
    path:'pagfisio',
    component:PaginaFisioterapiaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FormularioReservaCitaComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    DirectorioComponent,
    PaginaFisioterapiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
