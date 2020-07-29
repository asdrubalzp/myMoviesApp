import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { promise } from "protractor";
import { resolve } from "dns";
import { rejects } from "assert";
@Injectable({
  providedIn: "root",
})
export class MovieService {
  APIENDPOINT = "https://api.themoviedb.org/3/movie";
  // "https://api.themoviedb.org/3/movie/popular?api_key=871b2392ad32a457457f70085af994d2&language=es&page=1";
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
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
