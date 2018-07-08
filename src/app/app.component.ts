import { Component } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // public items: Item[] = [
  //     new Item('MacBook Pro', 'Macbook por retina', 1073),
  //     new Item('Dell', 'core i7 por retina', 1074)
  // ];

  items = [
      {name:'MacBook Pro', description: '8gb 500hd', code: 1730},
      {name:'MacBook Pro Retina', description: '8gb 500hd', code: 1733}
  ];

  onItemCreated(itemData: {name: string, description: string, code: number}) {
      this.items.push(itemData);
  }
}
