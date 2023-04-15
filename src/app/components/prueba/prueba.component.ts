import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  prueba: string = "Hola alumnos de EducaciónIT";
  isShow: boolean = true;
  arreglo: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  mutar() {
    this.prueba = "Hola alumnas y alumnos de EducaciónIT";
    this.isShow = !this.isShow;
    this.arreglo = ["Araceli", "Juan", "Alan", "Gabriel", "Julieta", "Miriam"];
  }

}


