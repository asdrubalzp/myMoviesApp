import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingularMoviePageRoutingModule } from './singular-movie-routing.module';

import { SingularMoviePage } from './singular-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingularMoviePageRoutingModule
  ],
  declarations: [SingularMoviePage]
})
export class SingularMoviePageModule {}
