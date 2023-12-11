import { Component } from '@angular/core';
import{DatosDoctoresService} from './datos-doctores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoWEb-Angular';
  constructor(public servicioDoctores:DatosDoctoresService){}
}
