import { Pipe, PipeTransform } from '@angular/core';
import { Cast } from '../interfaces/credits-response';

@Pipe({
  name: 'profile'
})
export class ProfileImage implements PipeTransform {


  transform( cast: Cast ): any {

    let url = "https://image.tmdb.org/t/p/original";

    if( cast ){
      return url + cast;
      
    }else{
      return './assets/img/no-img.jpg'
    }
  }

}
