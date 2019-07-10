import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FoodDetailPage } from '../food-detail/food-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toFoodDetail() {
    this.navCtrl.push(FoodDetailPage);
  }

}
