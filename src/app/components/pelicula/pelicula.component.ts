import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cast } from 'src/app/interfaces/credits-response';
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
  public cast: Cast[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private ps: PeliculasService,
               private loc: Location,
               private router: Router ) { }

  ngOnInit(): void {

    const { id } = this.activatedRoute.snapshot.params;

    this.ps.getPeliculaDetalle( id ).subscribe( movie => {
      //console.log(movie);
      if ( !movie ) {
        this.router.navigateByUrl('/home');
        return;
      }
      this.pelicula = movie;
    });



    this.ps.getCast( id ).subscribe( cast => {
      console.log(cast)
      this.cast = cast;
    });

   }
   
   onVolver(): void {
    this.loc.back();
   }
   
}
