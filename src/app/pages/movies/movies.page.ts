import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"],
})
export class MoviesPage implements OnInit {
  pageName: string;
  popularMovies: any[];

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getMovies();
    this.pageName = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getMovies() {
    // tslint:disable-next-line: no-debugger
    this.movieService
      .getPopularMovies()
      .then((data: any[]) => {
        this.popularMovies = data["results"];
        console.log(this.popularMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
