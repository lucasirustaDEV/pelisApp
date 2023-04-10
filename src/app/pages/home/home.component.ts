import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movie: Movie[]=[];
  moviesSlideShow: Movie[]= [];

  constructor(private peliculasSvc:PelisService) {}

  ngOnInit(): void {

    this.peliculasSvc.getPeliculas().subscribe(movies =>{
      console.log(movies);
      this.moviesSlideShow = movies;
      this.movie = movies;
    });

  }
}
