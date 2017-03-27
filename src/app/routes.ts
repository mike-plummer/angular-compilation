import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [ {
        path: 'superpowers',
        loadChildren: '../superpowers/superpowers.module#SuperpowersModule'
    }, {
        path: 'history',
        loadChildren: '../history/history.module#HistoryModule'
    }, {
        path: 'info',
        loadChildren: '../info/info.module#InfoModule'
    } ];