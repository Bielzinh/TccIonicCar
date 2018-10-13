import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

@IonicPage()
@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html',
})
export class PagamentoPage {
qrData = null;
createdCode = null;
scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) {
  }

createCode(){
  this.createdCode = this.qrData;
}
scanCode(){
  this.barcodeScanner.scan().then(barcodeData => {
    this.scannedCode = barcodeData.text;
  })

}
}
