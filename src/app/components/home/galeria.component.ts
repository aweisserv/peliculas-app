import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera-response';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styles: [
  ]
})
export class GaleriaComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

}
