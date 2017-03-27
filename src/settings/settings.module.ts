import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingComponent } from './setting/setting.component';
import { SETTINGS_ROUTES } from './routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(SETTINGS_ROUTES) ],
    declarations: [ SettingsComponent, SettingComponent ]
})
export class SettingsModule {
    constructor() {
    }
}