import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CarteleraResponse, Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  public cartelera:any;
  public movies: Movie[] = [];
  public moviesSlideshow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    
    const pos = ( document.documentElement.scrollTop || document.body.scrollTop ) +1100;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );
    
    if (pos > max) {
      //Llamar al servicio
      if (this.ps.cargando ) { return; }

      this.ps.getCartelera().subscribe( resp => {
        this.movies.push(...resp);
      } );
    }

  }

  constructor( public ps: PeliculasService ) { 

  }

  ngOnInit(): void {
    
    this.ps.getCartelera()
        .subscribe( ( movies => {
          console.log("Cartelera", movies)
          this.movies = movies;
          this.moviesSlideshow = movies;
        })
      );

  }

  ngOnDestroy() {
    this.ps.resetCarteleraPage();
  }

}
