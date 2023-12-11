import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  fotoN:number=0;
  vecImagenes:string[]=[
    "assets/car1.jpg","assets/car2.jpg","assets/car3.jpg","assets/car4.jpg","assets/car5.jpg","assets/car6.jpg"
  ]

  siguiente(){
    if (this.fotoN>=0 && this.fotoN < this.vecImagenes.length-1) 
      this.fotoN++;
    else
      this.fotoN=0;
  }
  anterior(){
    if (this.fotoN==0) 
      this.fotoN=this.vecImagenes.length-1;
    else if(this.fotoN<this.vecImagenes.length)
      this.fotoN--;
  }
}
