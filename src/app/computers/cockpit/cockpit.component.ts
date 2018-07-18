import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() itemCreated = new EventEmitter<{name: string, description: string, code: number}>();

    public name: string;
    public description: string;
    public code: number;

    constructor() { }

    ngOnInit() {
    }

    onItem() {
        this.itemCreated.emit({
            name: this.name,
            description: this.description,
            code: this.code
        });

        this.clean();
    }

    clean() {
        this.name = '';
        this.description = '';
        this.code = null;
    }

}
