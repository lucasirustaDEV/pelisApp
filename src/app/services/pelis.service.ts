import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interface';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { MovieDetails } from '../interfaces/pelicula.interface';
import { Cast, Credits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private serverUrl: string = "https://api.themoviedb.org/3";
  private peliculasPage = 1;
  cargando = false;
  
  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'da7158304e667d5f34e462aa16e7fef1',
      language: 'es-ES',
      page: this.peliculasPage.toString()
    }
  }

  getPeliculas():Observable<Movie[]>{

    console.log("Página: " + this.peliculasPage);

    if(this.cargando){
      return of([]);
    }

    this.cargando = true;

    return this.http.get<PeliculasResponse>(`${this.serverUrl}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results), 
      tap(()=> {
        this.peliculasPage += 1;
        this.cargando = false;
      })
    );
  }

  buscarPeliculas(texto: string) : Observable<Movie[]>{

    const params = {...this.params, page:1, query:texto};

    return this.http.get<PeliculasResponse>(`${this.serverUrl}/search/movie`,{params}).pipe(
      map(res=>res.results)
    );
  }

  resetPeliculasPage() {
    this.peliculasPage = 1;
  }

  getPeliculasDetalle(id: string){
    return this.http.get<MovieDetails>(`${this.serverUrl}/movie/${id}`,{params:this.params})
    .pipe(
      catchError(err => of(null))
    );
  }

  getCast(id:string):Observable<Cast[]>{
    return this.http.get<Credits>(`${this.serverUrl}/movie/${id}/credits`,{params:this.params}).pipe(
      map(res => res.cast),
      catchError(err => of([]))
    )
  }
}
