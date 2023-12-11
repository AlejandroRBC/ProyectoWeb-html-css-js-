import { Injectable } from '@angular/core';
import { doctor } from './doctors';
@Injectable({
  providedIn: 'root',
})
export class DatosDoctoresService {
  constructor() {}
  vecDoctores: doctor[] = [
    {
      area: 'Medicina',
      foto: 'assets/doc1.jpg',
      nombre: 'lic. Yovana Carrisales',
      detalles:
        ' especializada en el cuidado de niños con necesidades especiales,. Con habilidades quirúrgicas avanzadas y una sensibilidad única hacia las necesidades particulares de los niños con condiciones especiales',
      telefono: '70541548',
      email: 'nombre01@mail.com',
    },
    {
      area: 'Nutricion',
      foto: 'assets/doc2.jpg',
      nombre: 'Lic claudia Gamarra mamani',
      detalles:
        'especializada en la promoción de la salud a través de la alimentación. Su enfoque integral abarca desde la educación nutricional hasta la creación de planes dietéticos personalizados. Con un compromiso innato hacia el bienesta',
      telefono: '70547897',
      email: 'nombre02@mail.com',
    },
    {
      area: 'Fisioterapia',
      foto: 'assets/doc3.jpg',
      nombre: 'Marco Montoya',
      detalles:
        'enfoque especializado y compasivo. Su dedicación se manifiesta en la atención individualizada que brinda a sus pacientes, abordando de manera integral las necesidades de rehabilitación física. Con habilidades técnicas avanzadas y un compromiso constante con el bienestar,',
      telefono: '70547840',
      email: 'nombre03@mail.com',
    },
    {
      area: 'FonoAudiologia',
      foto: 'assets/doc4.jpg',
      nombre: 'Lic khaterin jimenez',
      detalles: 'especialista en fonoaudiología, se destaca por su enfoque experto y compromiso con el desarrollo comunicativo y auditivo de sus pacientes. Su habilidad para evaluar y tratar trastornos del habla, lenguaje y audición la convierte en una profesional altamente valorada',
      telefono: '70547111',
      email: 'nombre04@mail.com',
    },
    {
      area: 'Psicomotricidad',
      foto: 'assets/doc6.jpg',
      nombre: 'Lic.Nayla Aruquipa',
      detalles:
        'pediatra especializado en psicomotricidad, destaca por su enfoque integral en el cuidado infantil. Su dedicación y empatía, junto con su habilidad para trabajar con familias, lo convierten en un profesional valorado por su compromiso con el bienestar de los niños',
      telefono: '70547591',
      email: 'nombre05@mail.com',
    },
    {
      area: 'Psicologia',
      foto: 'assets/doc5.jpg',
      nombre: 'Lic ruben aruni',
      detalles:
        'Su compromiso se refleja en la atención cuidadosa que brinda a sus pacientes, abordando aspectos emocionales y psicológicos de manera completa. Su habilidad para establecer conexiones significativas con aquellos a quienes atiende, así como su enfoque personalizado',
      telefono: '70547649',
      email: 'nombre06@mail.com',
    },
  ];

  valor: number = 0;
}
