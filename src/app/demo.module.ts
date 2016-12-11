import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo/demo.component';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ DemoComponent ],
    bootstrap: [ DemoComponent ],
    providers: [ ]
})
export class DemoModule {
    constructor() {
    }
}