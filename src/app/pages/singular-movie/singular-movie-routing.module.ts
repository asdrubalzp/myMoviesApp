import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingularMoviePage } from './singular-movie.page';

const routes: Routes = [
  {
    path: '',
    component: SingularMoviePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingularMoviePageRoutingModule {}
