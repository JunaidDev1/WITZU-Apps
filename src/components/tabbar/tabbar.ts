import { Component } from '@angular/core';

/**
 * Generated class for the TabbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabbar',
  templateUrl: 'tabbar.html'
})
export class TabbarComponent {

  text: string;

  constructor() {
    console.log('Hello TabbarComponent Component');
    this.text = 'Hello World';
  }

}
