import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { RouterModule } from '@angular/router';
import { PeliculasPosterComponent } from './peliculas-poster/peliculas-poster/peliculas-poster.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CastSlideShowComponent } from './cast-slide-show/cast-slide-show.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterComponent,
    CastSlideShowComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterComponent,
    CastSlideShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule,
    NgbRatingModule,
    PipesModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
