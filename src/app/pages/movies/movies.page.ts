import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../../services/movie.service";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"],
})
export class MoviesPage implements OnInit {
  pageName: string;
  popularMovies: any[];
  movie: any;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.movie = this.movieService.getMovieDetail();
  }

  ngOnInit() {
    this.getMovies();
    this.pageName = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getMovies() {
    // tslint:disable-next-line: no-debugger
    this.movieService
      .getPopularMovies()
      .then((data: any[]) => {
        // tslint:disable-next-line: no-string-literal
        this.popularMovies = data["results"];
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getMovieDetails(movie) {
    this.movieService.setMovieDetail(movie);
    this.router.navigateByUrl("/movie/" + movie.id);
  }
}
