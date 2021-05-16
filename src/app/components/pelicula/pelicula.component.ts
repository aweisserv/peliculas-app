import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

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

    combineLatest([

      this.ps.getPeliculaDetalle( id ),
      this.ps.getCast( id )

    ]).subscribe( ( [pelicula, cast] ) => {
      
      if ( !pelicula ) {
        this.router.navigateByUrl('/home');
        return;
    }

    this.pelicula = pelicula;
    this.cast = cast.filter( actor => actor.profile_path !== null );

   });
  
  }
  
  onVolver(): void {
    this.loc.back();
   }
   
}
