import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoricopagaPage } from '../historicopaga/historicopaga';
@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoPage(){
    this.navCtrl.push(HistoricopagaPage);
  }

}
