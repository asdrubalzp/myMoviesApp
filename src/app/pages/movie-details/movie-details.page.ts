import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.page.html",
  styleUrls: ["./movie-details.page.scss"],
})
export class MovieDetailsPage implements OnInit {
  idMovie: string;
  movie: any;
  isActiveFavoriteIcon = false;
  constructor(
    private movieService: MovieService,
    public alertController: AlertController,
    public toastController: ToastController,
    private activatedRoute: ActivatedRoute
  ) {
    this.movie = this.movieService.getMovieDetail();
  }

  ngOnInit() {}

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
      duration: 1500,
    });

    toast.present();
  }

  addToFavorite() {
    if (this.isActiveFavoriteIcon) {
      this.isActiveFavoriteIcon = false;
      this.movieService.favoriteMovies.pop();
    } else {
      this.isActiveFavoriteIcon = true;
      this.movieService.favoriteMovies.push(this.movie);
    }
    this.movieService.numberOfFavoriteMovies = this.movieService.favoriteMovies.length;
    this.addToFavoriteToast(this.isActiveFavoriteIcon);
  }
}
