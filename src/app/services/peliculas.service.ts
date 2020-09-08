import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientJsonpModule } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(  private  http: HttpClient, private jsonp: HttpClientJsonpModule ) { }

  getQuery(query: string) {

    let apiKey: string='08ba5c8d49c4d5b05eb685b51c17cc2b';

    const urlMovieDb = `https://api.themoviedb.org/3/${query}${apiKey}&language=es`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE'
    });

    return this.http.get(urlMovieDb, {headers});

  }

  getPopulares() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc?&apiKey=').pipe(map( res => res ));
  }

  buscarPelicula() {
    return this.getQuery('/search/movie?query=').pipe(map( res => res ));
  }

}
  //To use jsonp, call http method as 'http.jsonp(url, 'callback');


