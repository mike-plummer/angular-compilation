import { Routes } from '@angular/router';
import { SettingComponent } from './setting/setting.component';
import { SettingsComponent } from './settings.component';

export const SETTINGS_ROUTES: Routes = [{
    path: '',
    children: [ {
            path: '',
            component: SettingsComponent
        }, {
            path: ':id',
            component: SettingComponent
        } ]
    }];