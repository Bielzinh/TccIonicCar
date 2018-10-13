import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentoPage } from './pagamento';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
@NgModule({
  declarations: [
    PagamentoPage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(PagamentoPage),
  ],

  providers: [

    BarcodeScanner
  ]
})
export class PagamentoPageModule {}
