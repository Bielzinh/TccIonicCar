import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    BrowserAnimationsModule,
    IonicPageModule.forChild(LoginPage)
  ],
})
export class LoginPageModule {}
