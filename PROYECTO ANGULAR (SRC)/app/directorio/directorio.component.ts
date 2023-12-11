import { Component } from '@angular/core';
import{ DatosDoctoresService }from'../datos-doctores.service';
import{doctor} from '../doctors';
@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {
  constructor(public servDoctores:DatosDoctoresService){} 
  doctorSelec=this.servDoctores.vecDoctores[0];
  seleccionar(docy:doctor){
    this.doctorSelec = docy;
    console.log(this.doctorSelec.area);
    
  }
}
