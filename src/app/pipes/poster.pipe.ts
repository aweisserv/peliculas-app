import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {



  transform( poster: string ): string {

      // https://image.tmdb.org/t/p/original/{{ movie.poster_path }}

      if ( poster ) {
        return `https:image.tmdb.org/t/p/original/${ poster }`
      } else {
        return './assets/img/no-img.jpg'
      }
    
  }

}
