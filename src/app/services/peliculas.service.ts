import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class PeliculaService {
  
  private apikey: string = '03d4b8b50b89b8a6680192023f6cdde0';
  private urlMovie: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopulares(){

    let url = `${this.urlMovie}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get( url )
      .pipe(map( (res: any) => {

        console.log(res.results);
        return res.results;

      }));
  }

}

  //To use jsonp, call http method as 'http.jsonp(url, 'callback');


