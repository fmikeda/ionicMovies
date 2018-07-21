import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import AvaliacaoModel from "../../models/avaliacao.model";

/*
  Generated class for the AvaliacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvaliacaoProvider {
  AVALIACAO_STORAGE_NAME = "AVALIACOES";
  constructor(public http: HttpClient) {
    console.log("Hello AvaliacaoProvider Provider");
  }

  addAvaliacao(avaliacao: AvaliacaoModel) {
    var avaliacoes = [];
    var avaliacoes_storage = localStorage.getItem(this.AVALIACAO_STORAGE_NAME);
    if (avaliacoes_storage) {
      avaliacoes = JSON.parse(avaliacoes_storage);
    }
    avaliacoes.push(avaliacao);
    localStorage.setItem(
      this.AVALIACAO_STORAGE_NAME,
      JSON.stringify(avaliacoes)
    );
  }

  getAvaliacoes() {
    var avaliacoes = [];
    var avaliacoes_storage = localStorage.getItem(this.AVALIACAO_STORAGE_NAME);
    if (avaliacoes_storage) {
      avaliacoes = JSON.parse(avaliacoes_storage);
    }
    return avaliacoes;
  }
}
