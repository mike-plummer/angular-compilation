import { Component, Input } from '@angular/core';

@Component({
    selector: 'setting',
    templateUrl: './setting.html'
})
export class SettingComponent {

    @Input()
    public name: string;

    @Input()
    public enabled: boolean;

    constructor() {}

    public toggle(): void {
        this.enabled = !this.enabled;
    }
}