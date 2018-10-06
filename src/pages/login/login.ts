import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

login = true;
register = false;

loginForm = {
  email: '',
  password: ''
};

registerForm = {
  email: '',
  password: '',
  name: ''
}

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
   private authProvider: AuthProvider,
   private firebaseProvider: FirebaseProvider,
   private loadingCtrl: LoadingController,
   private storage: Storage


    ) {
  }

  //exibir formulário de registro
exibirRegistrar(){
  this.login = false;
  this.register = true;
}
  //exibir form de login

exibirLogin(){
  this.login = true;
  this.register = false;
}

//login
Fazerlogin(){
  let load = this.loadingCtrl.create();
  load.present();

  this.authProvider.login(this.loginForm)
  .then((res) => {
    let uid = res.user.uid;
    this.firebaseProvider.getUser(uid)
    .then((res) => {
      let data = res.data();
      this.storage.set('usuario', data)
      .then(() => {
        load.dismiss();
        this.navCtrl.setRoot('HomePage');
      })
    })
  })
  .catch((err) => {
    load.dismiss();

  })
  }
  //REGISTRO
  criarNovaConta(){
  let load = this.loadingCtrl.create();
  load.present();

  this.authProvider.register(this.registerForm)
  .then((res) => {
    let uid = res.user.uid;
  //Organizar Dados
    let data = {
      uid: uid,
      name: this.registerForm.name,
      email: this.registerForm.email
    };
    //Gravar usr no Firestore
    this.firebaseProvider.postUser(data)
    .then(() => {
        this.storage.set('usuario', data)
        .then(() => {
          load.dismiss();
          this.navCtrl.setRoot('HomePage');
        })
  })
  .catch((err) => {
    load.dismiss();

  })
  })
  .catch((err) => {
    load.dismiss();


  })

  }


}
