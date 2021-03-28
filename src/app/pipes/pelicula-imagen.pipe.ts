import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/cartelera-response';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform( movie: Movie ): any {

    let url = "https://image.tmdb.org/t/p/original";

    if( movie.backdrop_path ){
      return url + movie.backdrop_path;

    }else if( movie.poster_path ){
        return url + movie.poster_path;
        
    }else{
      return './assets/img/no-img.jpg'
    }
  }

}
