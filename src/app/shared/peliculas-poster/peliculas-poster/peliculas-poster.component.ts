import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from 'src/app/interfaces/peliculas.interface';

@Component({
  selector: 'app-peliculas-poster',
  templateUrl: './peliculas-poster.component.html',
  styleUrls: ['./peliculas-poster.component.css']
})
export class PeliculasPosterComponent implements OnInit {

  @Input() movies?:Movie[];

  constructor(
    private config: NgbRatingConfig,
    private router: Router
    ){
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
    //console.log(this.movies);
  }

  onMovieClick(movie: Movie){
    console.log(movie);
    this.router.navigate(['/pelicula',movie.id]);
  }

}
