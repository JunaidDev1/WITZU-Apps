import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PreLoginPage } from '../pages/pre-login/pre-login';
import { SignupPage } from '../pages/signup/signup';
import { SignupBPage } from '../pages/signup-b/signup-b';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { TabbarComponent } from '../components/tabbar/tabbar';
import { FoodDetailPage } from '../pages/food-detail/food-detail';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PreLoginPage,
    LoginPage,
    SignupBPage,
    SignupPage,
    ResetPasswordPage,
    TabbarComponent,
    FoodDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PreLoginPage,
    LoginPage,
    SignupBPage,
    SignupPage,
    ResetPasswordPage,
    FoodDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
