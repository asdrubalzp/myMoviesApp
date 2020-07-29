import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";

@Component({
  selector: "app-singular-movie",
  templateUrl: "./singular-movie.page.html",
  styleUrls: ["./singular-movie.page.scss"],
})
export class SingularMoviePage implements OnInit {
  idMovie: string;
  movie: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.idMovie = activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.searchMovie();
  }

  searchMovie() {
    // tslint:disable-next-line: radix
    this.movie = this.movieService.searchMovie(parseInt(this.idMovie));
    console.log(this.movie);
  }
}
