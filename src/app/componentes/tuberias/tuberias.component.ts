import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuberias',
  templateUrl: './tuberias.component.html',
  styleUrls: ['./tuberias.component.css']
})
export class TuberiasComponent implements OnInit {
  usuario: string = "david rebato diana"
  mes: string = "ENERO"
  texto: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi placeat quas tempore."
  fecha: Date = new Date()
  dinero: number = 12.40
  numero_pi: number = Math.PI
  preposiciones: string[] = ["a", "ante", "bajo", "cabe", "con", "contra", "de", "desde"]
  usuarios = [
    {nombre: "David", apellido: "Rebato", edad: 19},
    {nombre: "Andrea", apellido: "Ortega", edad: 20},
    {nombre: "Cristino", apellido: "Rebato", edad: 23}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
