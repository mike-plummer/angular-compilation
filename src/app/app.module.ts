import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

const APP_ROUTES: Routes = [ {
    path: 'superpowers',
    loadChildren: '../superpowers/superpowers.module#SuperpowersModule'
}, {
    path: 'history',
    loadChildren: '../history/history.module#HistoryModule'
}, {
    path: 'info',
    loadChildren: '../info/info.module#InfoModule'
}, {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
} ];

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(APP_ROUTES) ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {
    }
}