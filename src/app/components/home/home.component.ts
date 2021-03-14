import { Component, OnInit } from '@angular/core';
import { CarteleraResponse, Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public cartelera:any;
  public movies: Movie[] = [];

  constructor( public ps: PeliculasService ) { 

  }

  ngOnInit(): void {
    
    this.ps.getCartelera()
        .subscribe( (resp: CarteleraResponse) => {
          console.log("Cartelera", resp.results)
          this.movies = resp.results;
        });

  }

}
