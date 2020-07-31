import { Component, OnInit } from "@angular/core";
import { MovieService } from "../../services/movie.service";
@Component({
  selector: "app-favorite-movies",
  templateUrl: "./favorite-movies.page.html",
  styleUrls: ["./favorite-movies.page.scss"],
})
export class FavoriteMoviesPage implements OnInit {
  movies: any[];
  slides = [
    {
      img: "assets/movie.svg",
      titulo: "Agrega reseñas y comentarios<br>de tus peliculas favoritas",
    },
    {
      img: "assets/food-potcorn.svg",
      titulo: "Comparte con tus amigos<br>tus peliculas favoritas",
    },
    {
      img: "assets/favorite.svg",
      titulo: "Agrega calificaciones <br>de tus peliculas favoritas",
    },
  ];
  constructor(private movieService: MovieService) {
    this.getFavoriteMovies();
  }

  ngOnInit() {}

  getFavoriteMovies() {
    this.movies = this.movieService.favoriteMovies;
  }
}
