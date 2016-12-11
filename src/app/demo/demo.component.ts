import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    template: require('./demo.pug'),
    styles: [ require('./demo.scss').toString() ]
})
export class DemoComponent {

    public factCounter: number = 0;

    constructor() {

    }

    public incrementFactCounter() {
        this.factCounter++;
    }
}