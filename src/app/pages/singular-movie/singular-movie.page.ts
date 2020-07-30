import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie.service";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-singular-movie",
  templateUrl: "./singular-movie.page.html",
  styleUrls: ["./singular-movie.page.scss"],
})
export class SingularMoviePage implements OnInit {
  idMovie: string;
  movie: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    public alertController: AlertController
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
  searchMovie() {
    // tslint:disable-next-line: radix
    this.movie = this.movieService.searchMovie(parseInt(this.idMovie));
    console.log(this.movie);
  }
}
