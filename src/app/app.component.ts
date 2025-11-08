import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item = new WishItem('Learn Angular', true);
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  title = 'angular';
  isLoggedIn = false;
  userRole = 'admin';
  textColor = 'brown';
  fontSize = 50;
  username = '';
  constructor() {
    setTimeout(() => {
      this.title = "Angular"
    }, 1000);
  }
}