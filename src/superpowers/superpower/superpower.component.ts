import { Component, Input } from '@angular/core';
import { Superpower } from './superpower';

@Component({
    selector: 'superpower',
    templateUrl: './superpower.html'
})
export class SuperpowerComponent {

    @Input()
    public superpower: Superpower;

    public toggle(): void {
        this.superpower.enabled = !this.superpower.enabled;
    }
}