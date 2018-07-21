import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MoviesProvider } from "../../providers/movies/movies";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { MovieDetailsPage } from "../movie-details/movie-details";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  providers: [Camera]
})
export class HomePage {
  movies: any = [];
  image: any = "";
  constructor(
    public navCtrl: NavController,
    private moviesProvider: MoviesProvider,
    private camera: Camera
  ) {
    this.moviesProvider.getPopularMovies().then(movies => {
      this.movies = movies;
    });
  }

  goToDetails(movie) {
    this.navCtrl.push(MovieDetailsPage, {
      id: movie.id
    });
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }
}
