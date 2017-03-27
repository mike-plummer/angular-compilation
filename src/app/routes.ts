import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [ {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsModule'
    }, {
        path: 'history',
        loadChildren: '../history/history.module#HistoryModule'
    }, {
        path: 'info',
        loadChildren: '../info/info.module#InfoModule'
    } ];