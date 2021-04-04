import { Component } from '@angular/core';
import { CarteleraResponse, Movie } from './interfaces/cartelera-response';
import { PeliculasService } from "./services/peliculas.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor( public ps:PeliculasService ) {

    this.ps.getPopulares()
      .subscribe( (data: Movie[]) => console.log("getPopulares", data) )
  }
  
}
