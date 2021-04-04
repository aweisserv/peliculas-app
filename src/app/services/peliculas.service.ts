import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { MovieResponse } from '../interfaces/movie-response';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private carteleraPage = 1;
  public cargando = false;
  public urlMovieDb = `https://api.themoviedb.org/3/`
  

  constructor(  private  http: HttpClient ) { }

  get params() {
    return {
      api_key: '08ba5c8d49c4d5b05eb685b51c17cc2b',
      language: 'es-ES',
      page: this.carteleraPage.toString()
    }
  }

  resetCarteleraPage(){
    this.carteleraPage = 1;
  }

  getQuery(query: string) {    

    const urlMovieDb = `https://api.themoviedb.org/3/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE'
    });

    return this.http.get<CarteleraResponse>(urlMovieDb, { params: this.params, headers })
                      .pipe(
                        map( (resp)=>resp.results ),
                        tap( () => {
                          this.carteleraPage += 1;
                          this.cargando = false;
                        } )
                      );
  }

  getCartelera():Observable<Movie[]>{

    if( this.cargando ) {
      // cargando películas
      return of ([]);
    }

    this.cargando = true;
    console.log("Cargando API");

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7 );

    let desdeStr = desde.toISOString().substring(0,10);
    let hastaStr = hasta.toISOString().substring(0,10);

    return this.getQuery(`/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }`).pipe(map( ( res: Movie[] ) => res ));
  }


  getPopulares() {
    return this.getQuery('/discover/movie?sort_by=popularity.desc?').pipe(map( ( res: Movie[] ) => res ));
  }

  getPopularesNinos() {
    return this.getQuery('/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&apiKey=').pipe(map( ( res: any ) => res.results ));
  }

  buscarPelicula( texto: string ): Observable<Movie[]> {

    const params = { ...this.params, page: '1', query: texto };
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjliMjFkOTJmNjJkZDYwZTQxNzU3Yzc0ZDAzZDcyOCIsInN1YiI6IjVlNmJmYmM0MzU3YzAwMDAxMTQwYWVlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZxnGubGV4gRNjR6wB-hwoSHyz75GnkjmIMUi8jsJFlE'
    });
    return this.http.get<Movie[]>(`${this.urlMovieDb}/search/movie`, { params, headers }).pipe(map( ( res: any ) => res.results ));

  }

  getPeliculaDetalle( id: string ) {

    return this.http.get<MovieResponse>(`${this.urlMovieDb}/movie/${id}`,{ 
      params: this.params });

  }


}



