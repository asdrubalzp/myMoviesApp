import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pages/PopularMovies",
    pathMatch: "full",
  },
  {
    path: "folder/:id",
    loadChildren: () =>
      import("./folder/folder.module").then((m) => m.FolderPageModule),
  },
  {
    path: "pages/PopularMovies",
    loadChildren: () =>
      import("./pages/movies/movies.module").then((m) => m.MoviesPageModule),
  },
  {
    path: "pages/PopularMovies/:id",
    loadChildren: () =>
      import("./pages/singular-movie/singular-movie.module").then(
        (m) => m.SingularMoviePageModule
      ),
  },
  {
    path: "pages/favorite-movies",
    loadChildren: () =>
      import("./pages/favorite-movies/favorite-movies.module").then(
        (m) => m.FavoriteMoviesPageModule
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
