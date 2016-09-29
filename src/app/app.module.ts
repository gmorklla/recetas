import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecetasComponent } from './recetas/recetas.component';
import { ListaRecetasComponent } from './recetas/lista-recetas/lista-recetas.component';
import { RecetaComponent } from './recetas/lista-recetas/receta.component';
import { DetalleRecetasComponent } from './recetas/detalle-recetas/detalle-recetas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecetasComponent,
    ListaRecetasComponent,
    RecetaComponent,
    DetalleRecetasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
