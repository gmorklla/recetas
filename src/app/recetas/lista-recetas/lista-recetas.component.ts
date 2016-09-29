import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'rb-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styles: ['ul li { margin: 10px; }']
})
export class ListaRecetasComponent implements OnInit {

	recetas: Receta[] = [];
  @Output() recetaSeleccionadaEvent = new EventEmitter<Receta>();
	receta = new Receta('Titulo', 'Descripción', 'https://www.bobevans.com/_/media/bobevans_com/images/our-recipes-and-grocery/recipes/recipes-2nd-release/recipedetail_asianmaplemeatballs.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(receta: Receta) {
  	this.recetaSeleccionadaEvent.emit(receta);
  }

}
