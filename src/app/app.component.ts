import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Item[] = [
      new Item('MacBook Pro', 'Macbook por retina', 1073),
      new Item('Dell', 'core i7 por retina', 1074)
  ];
}
