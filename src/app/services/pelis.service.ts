import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, PeliculasResponse } from '../interfaces/peliculas.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PelisService {

  private serverUrl: string = "https://api.themoviedb.org/3";
  private peliculasPage = 1;
  


  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: 'da7158304e667d5f34e462aa16e7fef1',
      language: 'es-ES',
      pages: this.peliculasPage.toString()
    }
  }

  getPeliculas():Observable<Movie[]>{
    return this.http.get<PeliculasResponse>(`${this.serverUrl}/movie/now_playing`,{params:this.params}).pipe(
      map((res)=>res.results)
    );
  }
}
