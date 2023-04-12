import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetails } from 'src/app/interfaces/pelicula.interface';
import { PelisService } from 'src/app/services/pelis.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Cast } from 'src/app/interfaces/credits.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit{

  pelicula?: MovieDetails;
  cast: Cast[] = [];

  constructor(
    private peliculasSvc: PelisService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private config: NgbRatingConfig,
  ){
    config.max = 10;
    config.readonly = true;
  }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
    //console.log(id);

    this.peliculasSvc.getPeliculasDetalle(id).subscribe(movie=>{
      //console.log(movie);
      if (!movie) {
        this.router.navigateByUrl('/');
        return;
      }
      this.pelicula = movie;
    });

    this.peliculasSvc.getCast(id).subscribe(cast=>{
      this.cast = cast;
      //console.log(this.cast);
    });
    
  }

  

}
