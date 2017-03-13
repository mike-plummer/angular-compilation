import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SettingComponent } from './setting.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ SettingComponent ],
    exports: [ SettingComponent ]
})
export class SettingsModule {
    constructor() {
    }
}