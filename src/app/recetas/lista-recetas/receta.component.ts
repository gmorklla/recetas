import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../receta';

@Component({
  selector: 'rb-receta',
  templateUrl: './receta.component.html',
  styles: ['.row { margin-bottom: 0; }']
})
export class RecetaComponent implements OnInit {

	@Input() receta: Receta;
	recetaId: number;

  constructor() { }

  ngOnInit() {
  }

}
