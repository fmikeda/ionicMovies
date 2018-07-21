import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { MoviesProvider } from "../../providers/movies/movies";
import { AddCommentPage } from "../add-comment/add-comment";
import { CommentsProvider } from "../../providers/comments/comments";
import { AddAvaliacaoPage } from "../add-avaliacao/add-avaliacao";
import { AvaliacaoProvider } from "../../providers/avaliacao/avaliacao";

/**
 * Generated class for the MovieDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-movie-details",
  templateUrl: "movie-details.html"
})
export class MovieDetailsPage {
  movie_id: number;
  movie: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private moviesProvider: MoviesProvider,
    public modalCtrl: ModalController,
    private commentsProvider: CommentsProvider,
    private avaliacaoProvider: AvaliacaoProvider
  ) {
    this.movie_id = this.navParams.get("id");
    this.moviesProvider.getMovieDetail(this.movie_id).then(movie => {
      this.movie = movie;
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad MovieDetailsPage");
  }

  addAvaliacao() {
    let avaliacaoModal = this.modalCtrl.create(AddAvaliacaoPage, {
      id: this.movie_id
    });
    avaliacaoModal.present();
  }

  addComment() {
    let commentModal = this.modalCtrl.create(AddCommentPage, {
      id: this.movie_id
    });
    commentModal.present();
  }

  backToList() {
    this.navCtrl.pop();
  }

  getComments() {
    let comments = this.commentsProvider.getComments();
    console.log(comments);
    return comments;
  }

  getAvaliacoes() {
    let avaliacoes = this.avaliacaoProvider.getAvaliacoes();
    console.log(avaliacoes);
    return avaliacoes;
  }
}
