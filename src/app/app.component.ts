import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // items : any = [  // JavaScript approach
  items : WishItem[] = [
    // new WishItem('Learn Angular'),
    // new WishItem('Get Coffee', true),
    // new WishItem('Find grass that cuts itself')
  ];
  title = 'angular';
}

// Traditional for loop
// for(APP_INITIALIZER; Conditional; iteration)

// Javascript for of loop primarily used for iterable objects
// for (let item of items)