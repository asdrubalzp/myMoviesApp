import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  APIENDPOINT = "https://api.themoviedb.org/3";
  movies: any[];
  favoriteMovies: any[] = [];
  numberOfFavoriteMovies = 0;
  private movieDetail: any;

  constructor(private httpclient: HttpClient) {}

  getPopularMovies() {
    const urlToGet =
      this.APIENDPOINT +
      "/movie/popular" +
      "?api_key=871b2392ad32a457457f70085af994d2&language=es&page=1";
    // return this.httpclient.get(urlToGet);

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.httpclient.get(urlToGet).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  setMovieDetail(movie: any) {
    this.movieDetail = movie;
  }

  getMovieDetail() {
    return this.movieDetail;
  }

  getMovie(titleMovie: string, numberPage: number) {
    let defaultQuery = "the lord of the rings";
    const URLTOGET = `${this.APIENDPOINT}/search/movie?api_key=871b2392ad32a457457f70085af994d2&language=es&query=${titleMovie}&page=${numberPage}&include_adult=false`;
    return this.httpclient.get(URLTOGET);
  }
}
