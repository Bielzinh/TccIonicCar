import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Plugindd
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';


//firebase config
import { firebaseConfig } from '../configs/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';

//providers
import { AuthProvider } from '../providers/auth';
import {FirebaseProvider} from '../providers/firebase';


//pages
import { LoginPageModule } from '../pages/login/login.module';
import { HomePageModule } from '../pages/home/home.module';
import { CartaoPageModule } from '../pages/cartao/cartao.module';
import { HistoricoPageModule } from '../pages/historico/historico.module';
import { PagamentoPageModule } from '../pages/pagamento/pagamento.module';
import { HistoricopagaPageModule } from '../pages/historicopaga/historicopaga.module';
import { EfetuarpagamentoPageModule } from '../pages/efetuarpagamento/efetuarpagamento.module';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    //pages
    LoginPageModule,
    HomePageModule,
    CartaoPageModule,
    HistoricoPageModule,
    PagamentoPageModule,
    HistoricopagaPageModule,
    EfetuarpagamentoPageModule,

    //outros
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule,

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    AngularFireDatabase,
    FirebaseProvider,
    AuthProvider,
    StatusBar,
    SplashScreen,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
