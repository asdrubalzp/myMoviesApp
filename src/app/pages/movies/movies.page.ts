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
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.pageName = this.activatedRoute.snapshot.paramMap.get("id");
  }

  getMovies() {
    // tslint:disable-next-line: no-debugger
    this.movieService
      .getPopularMovies()
      .then((data: any) => {
        alert("gili");
        this.popularMovies = data;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(this.popularMovies);
  }
}
