import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import AvaliacaoModel from "../../models/avaliacao.model";
import { AvaliacaoProvider } from "../../providers/avaliacao/avaliacao";

/**
 * Generated class for the AddAvaliacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-add-avaliacao",
  templateUrl: "add-avaliacao.html"
})
export class AddAvaliacaoPage {
  movie_id: number;
  nota: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private avaliacaoProvider: AvaliacaoProvider,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddAvaliacaoPage");
  }

  addAvaliacao(avaliacao_text) {
    var avaliacao = new AvaliacaoModel();
    avaliacao.movie_id = this.movie_id;
    avaliacao.date = new Date();
    avaliacao.comment = avaliacao_text;
    avaliacao.nota = this.nota;
    this.avaliacaoProvider.addAvaliacao(avaliacao);
    this.closeModal();
  }

  setNota(nota) {
    this.nota = nota;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }
}
