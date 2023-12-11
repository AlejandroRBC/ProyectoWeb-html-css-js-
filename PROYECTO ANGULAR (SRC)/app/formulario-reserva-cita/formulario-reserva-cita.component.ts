import { Component } from '@angular/core';
import{ DatosDoctoresService }from'../datos-doctores.service';

@Component({
  selector: 'app-formulario-reserva-cita',
  templateUrl: './formulario-reserva-cita.component.html',
  styleUrls: ['./formulario-reserva-cita.component.css'],
  template :'<app-carrusel></app-carrusel>' 
})
export class FormularioReservaCitaComponent {
  Dias = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] ;
  Meses = ["Enero", "Febrero","Marzo","Abril","Mayo", "Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  Anios = [2023,2024];
  Areas=["Psicologia","Medicina","Fisioterapia","Fonoaudiologia","Nutricion","Psicomotricidad"];
  swNombre:boolean = false;
  swPaterno:boolean = false;
  swEdad:boolean = false;
  swDia:boolean = false;
  swMes:boolean = false;
  swAnio:boolean = false;
  swArea:boolean = false;

  swMensaje:boolean = true;



  enviar(nom:string,pat:string,mat:string,ed:string,dia:string,mes:string,anio:string,ar:string){ 
    var edad =  parseInt(ed);
    if (nom=='') this.swNombre=true;
    else this.swNombre=false;
    if (pat=='') this.swPaterno=true;
    else this.swPaterno=false;
    if (edad<=0 || edad>99 || ed=='') this.swEdad=true;
    else this.swEdad=false;
    if (dia=='') this.swDia=true;
    else this.swDia=false;
    if (mes=='') this.swMes=true;
    else this.swMes=false;
    if (anio=='') this.swAnio=true;
    else this.swAnio=false;
    if (ar=='-1') this.swArea=true;
    else this.swArea=false;
    
  }

  //TARJETA PRESENTACION
  constructor(public servDoctores:DatosDoctoresService){}
  volverEntero(valor:string){
    if(parseInt(valor)==-1)
      return 1;
    return parseInt(valor);
  }
  
}

