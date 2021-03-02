import { Component } from '@angular/core';
import { CarteleraResponse } from './interfaces/cartelera-response';
import { PeliculasService } from "./services/peliculas.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public ps:PeliculasService ) {

    this.ps.getPopulares()
      .subscribe( (data: CarteleraResponse) => console.log("getPopulares", data) )
  }
  
}
