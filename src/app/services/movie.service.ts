import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  APIENDPOINT = "https://api.themoviedb.org/3/movie";
  movies: any[];

  favoriteMovies: any[] = [];

  constructor(private httpclient: HttpClient) {}

  getPopularMovies() {
    const urlToGet =
      this.APIENDPOINT +
      "/popular" +
      "?api_key=871b2392ad32a457457f70085af994d2&language=es&page=1";
    // return this.httpclient.get(urlToGet);

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.httpclient.get(urlToGet).subscribe(
        (data) => {
          resolve(data);
          this.movies = data["results"];
          console.log(this.movies);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  searchMovie(idMovie: number) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.movies.length; i++) {
      console.log(this.movies[i].id);
      if (this.movies[i].id === idMovie) {
        return this.movies[i];
      }
    }
  }
}
