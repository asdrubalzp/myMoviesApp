import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
  movie: any = [];
  isActiveFavoriteIcon = false;
  urlTrailerMovie: string;
  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    public toastController: ToastController
  ) {
    this.idMovie = this.activatedRoute.snapshot.paramMap.get("id");
    this.getDetail();
  }

  ngOnInit() {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Lo sentimos",
      message: "No se encontró ningun tráiler para esta película",
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
      this.movieService.favoriteMovies.push({
        movieDetail: this.movie,
        review: "",
      });
    }
    this.movieService.numberOfFavoriteMovies = this.movieService.favoriteMovies.length;
    this.addToFavoriteToast(this.isActiveFavoriteIcon);
  }

  getDetail() {
    this.movieService
      .getDetailMovie(this.idMovie)
      .then((data: any) => {
        this.movie = data;
        console.log(this.movie);
      })
      .catch((err) => {
        console.log(err);
      });
    this.getVideoData();
  }

  getVideoData() {
    this.movieService.getTrailerMovie(this.idMovie).subscribe(
      (data: any) => {
        data["results"].forEach((element) => {
          if (element.site === "YouTube" && element.type === "Trailer") {
            this.urlTrailerMovie = `https://www.youtube.com/watch?v=${element.key}`;
          }
        });
        // this.dataVideo = data["results"];
        // console.log(this.dataVideo);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
