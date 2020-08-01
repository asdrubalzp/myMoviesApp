import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchmoviesPage } from './searchmovies.page';

const routes: Routes = [
  {
    path: '',
    component: SearchmoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchmoviesPageRoutingModule {}
