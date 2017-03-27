import { Component } from '@angular/core';
import { Setting } from './setting/setting';

@Component({
    selector: 'settings',
    templateUrl: './settings.html'
})
export class SettingsComponent {

    public settings: Setting[] = [];

    constructor() {
        this.settings.push(new Setting('Anti-gravity', false));
        this.settings.push(new Setting('Warp Drive', true));
        this.settings.push(new Setting('Invisibility', false));
        this.settings.push(new Setting('XRay Vision', true));
        this.settings.push(new Setting('Speed Reading', false));
        this.settings.push(new Setting('Air Conditioning', true));
    }
}