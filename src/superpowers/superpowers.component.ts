import { Component } from '@angular/core';
import { Superpower } from './superpower/superpower';

@Component({
    selector: 'superpowers',
    templateUrl: './superpowers.html',
    styleUrls: [ './superpowers.css' ]
})
export class SuperpowersComponent {

    public superpowers: Superpower[] = [];

    constructor() {
        ['Flight', 'Warp Drive', 'Invisibility', 'XRay Vision', 'Speed Reading', 'Nonchalance']
            .reduce((enabled, power) => {
                this.superpowers.push(new Superpower(power, enabled));
                return !enabled;
            }, false);
    }
}