import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(  private  http: HttpClient ) { }

  getQuery(query: string) {

    let apiKey: string='08ba5c8d49c4d5b05eb685b51c17cc2b';

    const urlMovieDb = `https://api.themoviedb.org/3/${query}${apiKey}&language=es`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE'
    });

    return this.http.get(urlMovieDb, {headers});

  }

  getCartelera(){

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = desde.toISOString().substring(0,10);
    let hastaStr = hasta.toISOString().substring(0,10);

    return this.getQuery(`/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=`).pipe(map( res => res ));
  }


  getPopulares() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc?&apiKey=').pipe(map( res => res ));
  }

  buscarPelicula( texto:string ) {
    return this.getQuery(`/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=`).pipe(map( res => res ));
  }

}
  //To use jsonp, call http method as 'http.jsonp(url, 'callback');


