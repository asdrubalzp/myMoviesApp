import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "searchmovies",
    pathMatch: "full",
  },

  {
    path: "PopularMovies",
    loadChildren: () =>
      import("./pages/movies/movies.module").then((m) => m.MoviesPageModule),
  },

  {
    path: "favorite-movies",
    loadChildren: () =>
      import("./pages/favorite-movies/favorite-movies.module").then(
        (m) => m.FavoriteMoviesPageModule
      ),
  },
  {
    path: "searchmovies",
    loadChildren: () =>
      import("./pages/searchmovies/searchmovies.module").then(
        (m) => m.SearchmoviesPageModule
      ),
  },
  {
    path: "movie/:id",
    loadChildren: () =>
      import("./pages/movie-details/movie-details.module").then(
        (m) => m.MovieDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
