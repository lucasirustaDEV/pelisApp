import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/peliculas.interface';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  movies: Movie[]=[];
  moviesSlideShow: Movie[]= [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    console.log('Scroll Funcional');
    const pos= (document.documentElement.scrollTop || document.body.scrollTop)*1300;
    const max= (document.documentElement.scrollHeight || document.body.scrollHeight);
    console.log(pos, max);

    if (pos > max) {
      this.peliculasSvc.getPeliculas().subscribe(movies=>{
        this.movies.push(...movies);
      })
    }
  }

  constructor(private peliculasSvc:PelisService) {}

  ngOnInit(): void {

    this.peliculasSvc.getPeliculas().subscribe(movies =>{
      //console.log(movies);
      this.moviesSlideShow = movies;
      this.movies = movies;
    });

  }

  ngOnDestroy(){
    this.peliculasSvc.resetPeliculasPage();
  }

}
