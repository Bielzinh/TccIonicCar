import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { EfetuarpagamentoPage } from '../efetuarpagamento/efetuarpagamento';

@IonicPage()
@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html',
})
export class PagamentoPage {
qrData = null;
createdCode = null;
scannedCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private barcodeScanner: BarcodeScanner) {
  }

createCode(){
  this.createdCode = this.qrData;
}
scanCode(){
  this.navCtrl.push(EfetuarpagamentoPage);
}
}
