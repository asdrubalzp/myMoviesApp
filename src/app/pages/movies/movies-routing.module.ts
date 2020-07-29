import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesPage } from "./movies.page";
import { SingularMoviePage } from "../singular-movie/singular-movie.page";

const routes: Routes = [
  {
    path: "",
    component: MoviesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesPageRoutingModule {}
