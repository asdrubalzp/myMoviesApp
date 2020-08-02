import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class MovieService {
  APIENDPOINT = "https://api.themoviedb.org/3";
  movies: any[];
  favoriteMovies = [];
  numberOfFavoriteMovies = 0;

  constructor(private httpclient: HttpClient) {}

  getPopularMovies(numberPage: string) {
    const URL = `${this.APIENDPOINT}/movie/popular?api_key=871b2392ad32a457457f70085af994d2&language=es&page=${numberPage}`;

    return this.httpclient.get(URL);
  }

  getDetailMovie(idMovie: string) {
    const URL = `${this.APIENDPOINT}/movie/${idMovie}?api_key=871b2392ad32a457457f70085af994d2&language=es-ES`;

    return new Promise((resolve, reject) => {
      this.httpclient.get(URL).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getTrailerMovie(idMovie: string) {
    const URL = `${this.APIENDPOINT}/movie/${idMovie}/videos?api_key=871b2392ad32a457457f70085af994d2&language=es-ES`;
    return this.httpclient.get(URL);
  }

  getMovie(titleMovie: string, numberPage: number) {
    const URLTOGET = `${this.APIENDPOINT}/search/movie?api_key=871b2392ad32a457457f70085af994d2&language=es&query=${titleMovie}&page=${numberPage}&include_adult=false`;
    return this.httpclient.get(URLTOGET);
  }
}
