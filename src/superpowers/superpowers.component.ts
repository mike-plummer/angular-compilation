import { Component } from '@angular/core';
import { Superpower } from './superpower/superpower';

@Component({
    selector: 'superpowers',
    templateUrl: './superpowers.html'
})
export class SuperpowersComponent {

    public superpowers: Superpower[] = [];

    constructor() {
        this.superpowers.push(new Superpower('Anti-gravity', false));
        this.superpowers.push(new Superpower('Warp Drive', true));
        this.superpowers.push(new Superpower('Invisibility', false));
        this.superpowers.push(new Superpower('XRay Vision', true));
        this.superpowers.push(new Superpower('Speed Reading', false));
        this.superpowers.push(new Superpower('Air Conditioning', true));
    }
}