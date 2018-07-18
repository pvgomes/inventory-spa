import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  items = [
      {name: 'MacBook', description: '8GB RAM', code: 1273},
      {name: 'Dell Vostro', description: '16GB RAM', code: 1274},
      {name: 'Lenovo', description: '12GB RAM', code: 1275}
  ];

  color = 'green';

  onItemCreated(itemData: {name: string, description: string, code: number}) {
        this.items.push(itemData);
  }

  constructor() { }

  ngOnInit() {
  }

}
