import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item = new WishItem('Learn Angular');
  title = 'angular';
  constructor() {
    setTimeout(() => {
      this.title = "Angular"
    }, 1000);
  }
}