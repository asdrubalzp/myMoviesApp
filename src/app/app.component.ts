import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { MovieService } from "./services/movie.service";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  public numberoffavoriteMovies = 0;
  public selectedIndex = 0;
  public appPages = [
    {
      title: "Peliculas",
      url: "searchmovies",
      icon: "videocam",
    },
    {
      title: "Populares",
      url: "PopularMovies",
      icon: "trending-up",
    },
    {
      title: "Mis Favoritas",
      url: "favorite-movies",
      icon: "star",
    },
  ];
  public labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private movieService: MovieService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.numberoffavoriteMovies = this.movieService.numberOfFavoriteMovies;
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split("folder/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  refreshFavoritreNumbres() {
    this.numberoffavoriteMovies = this.movieService.numberOfFavoriteMovies;
  }
}
