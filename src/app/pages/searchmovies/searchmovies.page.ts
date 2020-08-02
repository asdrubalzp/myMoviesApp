import { Component, OnInit, ViewChild } from "@angular/core";
import { MovieService } from "src/app/services/movie.service";
import { Router } from "@angular/router";
import { IonInfiniteScroll } from "@ionic/angular";
@Component({
  selector: "app-searchmovies",
  templateUrl: "./searchmovies.page.html",
  styleUrls: ["./searchmovies.page.scss"],
})
export class SearchmoviesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  searchBarOpened = false;

  movies: any[] = [];
  movieToSearch = "Star Wars";
  numberPage = 1;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.getMovie();
  }

  getMovie(event?) {
    this.movieService.getMovie(this.movieToSearch, this.numberPage).subscribe(
      (data) => {
        // tslint:disable-next-line: no-string-literal
        this.movies = [...this.movies, ...data["results"]];
      },
      (error) => {
        this.movies = [];
        console.log(error);
      }
    );

    if (event) {
      event.target.complete();
    }
    if (this.movies.length === 200) {
      event.target.disable = true;
      this.infiniteScroll.disabled = true;
    }
  }

  onSearchChange(event?) {
    this.movies = [];
    this.movieToSearch = event.detail.value;
    this.getMovie();
  }
  goToMovieDetails(id: any) {
    //this.movieService.setMovieDetail(movie);
    this.router.navigateByUrl("/movie/" + id);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
