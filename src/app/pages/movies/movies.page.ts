import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { IonInfiniteScroll } from "@ionic/angular";
@Component({
  selector: "app-movies",
  templateUrl: "./movies.page.html",
  styleUrls: ["./movies.page.scss"],
})
export class MoviesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  numberPage = 1;
  popularMovies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies(event?) {
    setTimeout(() => {
      this.movieService.getPopularMovies(this.numberPage.toString()).subscribe(
        (data) => {
          // tslint:disable-next-line: no-string-literal
          this.popularMovies = [...this.popularMovies, ...data["results"]];
          console.log(this.popularMovies);
        },
        (error) => {
          this.popularMovies = [];
          console.log(error);
        }
      );
      if (event) {
        event.target.complete();
      }
      if (this.popularMovies.length === 500) {
        event.target.disable = true;
        this.infiniteScroll.disabled = true;
      }
      this.numberPage += 1;
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  goToMovieDetails(id: any) {
    this.router.navigateByUrl("/movie/" + id);
  }
}
