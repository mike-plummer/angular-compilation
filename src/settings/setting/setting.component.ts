import { Component, Input } from '@angular/core';
import { Setting } from './setting';

@Component({
    selector: 'setting',
    templateUrl: './setting.html'
})
export class SettingComponent {

    @Input()
    public setting: Setting;

    constructor() {}

    public toggle(): void {
        this.setting.enabled = !this.setting.enabled;
    }
}