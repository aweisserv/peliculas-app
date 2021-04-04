import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieResponse } from 'src/app/interfaces/movie-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {

  public pelicula: MovieResponse;

  constructor( private activatedRoute: ActivatedRoute,
               private ps: PeliculasService  ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.ps.getPeliculaDetalle( id ).subscribe( movie => {
      console.log(movie);
      this.pelicula = movie;
    })
   }

}
