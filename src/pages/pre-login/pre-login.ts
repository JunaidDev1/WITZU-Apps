import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';


/**
 * Generated class for the PreLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-login',
  templateUrl: 'pre-login.html',
})
export class PreLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreLoginPage');
  }

  toSignup() {
    this.navCtrl.push(SignupPage);
  }

  toLogin() {
    this.navCtrl.push(LoginPage);
  }

}
