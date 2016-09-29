import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'rb-detalle-recetas',
  templateUrl: './detalle-recetas.component.html',
  styles: []
})
export class DetalleRecetasComponent implements OnInit {

	@Input() recetaSeleccionada: Receta;

  constructor() { }

  ngOnInit() {
  }

}
