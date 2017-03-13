import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.html'
})
export class AppComponent {
    public settings: Map<string, boolean>;

    constructor() {
        this.settings = new Map<string, boolean>();
        this.settings.set('Anti-gravity', false);
        this.settings.set('Warp Drive', true);
        this.settings.set('Invisibility', false);
        this.settings.set('XRay Vision', true);
        this.settings.set('Speed Reading', false);
        this.settings.set('Air Conditioning', true);
    }
}