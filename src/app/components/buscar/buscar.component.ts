import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera-response';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  public texto: string = '';
  public movies: Movie[] = [];

  constructor( private activatedRoute: ActivatedRoute,
               private ps: PeliculasService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.texto = params.texto;

      this.ps.buscarPelicula(params.texto).subscribe( movies => {
        this.movies = movies;
      });

    })
  }



}
