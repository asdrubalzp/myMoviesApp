import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-singular-movie",
  templateUrl: "./singular-movie.page.html",
  styleUrls: ["./singular-movie.page.scss"],
})
export class SingularMoviePage implements OnInit {
  idMovie: string;
  movie: any;

  isActiveFavoriteIcon = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    this.idMovie = activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.searchMovie();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error",
      message: "Esta funcionalidad aun está en proceso 😭",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async addToFavoriteToast(state: boolean) {
    let msg = "";
    let colorbutton = "";
    if (state) {
      msg = "Pelicula agregada a favoritos";
      colorbutton = "success";
    } else {
      msg = "Pelicula Eliminada de Favoritos";
      colorbutton = "danger";
    }

    const toast = await this.toastController.create({
      color: colorbutton,
      message: msg,
      translucent: true,
      duration: 1500,
    });

    toast.present();
  }
  searchMovie() {
    // tslint:disable-next-line: radix
    this.movie = this.movieService.searchMovie(parseInt(this.idMovie));
    console.log(this.movie);
  }

  addToFavorite() {
    if (this.isActiveFavoriteIcon) {
      this.isActiveFavoriteIcon = false;
      this.movieService.favoriteMovies.pop();
    } else {
      this.isActiveFavoriteIcon = true;
      this.movieService.favoriteMovies.push(this.movie);
    }
    console.log(this.movieService.favoriteMovies);
    this.addToFavoriteToast(this.isActiveFavoriteIcon);
  }
}
