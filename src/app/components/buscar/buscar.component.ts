import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
               private ps: PeliculasService ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      console.log(params.texto);
      this.ps.buscarPelicula(params.texto).subscribe( movies => {
        console.log(movies);
      });

    })
  }



}
