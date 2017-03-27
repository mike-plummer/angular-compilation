import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './routes';

@NgModule({
    imports: [ BrowserModule, RouterModule.forRoot(APP_ROUTES) ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {
    }
}