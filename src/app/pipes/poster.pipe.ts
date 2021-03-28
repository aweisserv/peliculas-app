import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../interfaces/cartelera-response';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {


  transform( movie: Movie ): any {

    let url = "https://image.tmdb.org/t/p/original";

    if( movie.poster_path ){
      return url + movie.poster_path;
    }else if( movie.backdrop_path ){
        return url + movie.backdrop_path;
    }else{
      return './assets/img/no-img.jpg'
    }
  }

}

