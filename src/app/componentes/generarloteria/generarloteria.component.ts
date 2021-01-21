import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarloteria',
  templateUrl: './generarloteria.component.html',
  styleUrls: ['./generarloteria.component.css']
})
export class GenerarloteriaComponent implements OnInit {
  digito: number;
  constructor() { }

  ngOnInit(): void {
    this.obtenaleatorio()
  }
  obtenaleatorio(): void{
    this.digito = Math.floor(Math.random() * (10))
  }
}
