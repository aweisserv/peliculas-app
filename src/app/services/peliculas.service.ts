import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getQueryJsonP(query: string) {

    let apiKey: string='08ba5c8d49c4d5b05eb685b51c17cc2b';

    const urlMovieDb = `https://api.themoviedb.org/3/${query}${apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.http.jsonp( urlMovieDb, 'callback' );
  }

  getPopulares(){
    return this.getQueryJsonP('/discover/movie?sort_by=popularity.desc?&apiKey=').pipe(map( res => res ));
  }
}

  //To use jsonp, call http method as 'http.jsonp(url, 'callback');


