import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({  
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  public cartelera:any;

  constructor( public ps: PeliculasService ) { 

    this.ps.getCartelera()
        .subscribe( (data: any) => {
          console.log( "getCartelera",  data.results );
          this.cartelera = data.results;
        });

  }

  ngOnInit(): void {
  }

}
