import { NgModule } from '@angular/core';
import { SettingComponent } from './setting.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ SettingComponent ],
    exports: [ SettingComponent ]
})
export class SettingsModule {
    constructor() {
    }
}