import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit  {
  
  texto: string = '';
  movies: Movie[] = [];
  noExiste?: boolean;

  constructor(private activatedRoute: ActivatedRoute, private peliculasSvc: PelisService){}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      
      console.log(params['texto']);
      this.texto = params['texto'];

      this.peliculasSvc.buscarPeliculas(this.texto).subscribe(movies=>{

        if (movies.length > 0){
          this.movies = movies;
          this.noExiste = false;
        }else {
          this.noExiste = true;
        }
      });

    })
  }

}
