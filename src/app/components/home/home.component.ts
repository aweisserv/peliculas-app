import { Component, HostListener, OnInit } from '@angular/core';
import { CarteleraResponse, Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public cartelera:any;
  public movies: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) +1100;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if (pos > max) {
      console.log("Llamar servicio");
    }

  }

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
