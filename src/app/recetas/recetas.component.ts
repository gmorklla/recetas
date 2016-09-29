import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';

@Component({
  selector: 'rb-recetas',
  templateUrl: './recetas.component.html',
  styles: []
})
export class RecetasComponent implements OnInit {

	recetaSeleccionada: Receta;

  constructor() { }

  ngOnInit() {
  }

}
