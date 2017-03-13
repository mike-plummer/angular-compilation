import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsModule } from './setting/settings.module';
import { IterablePipe } from './iterable.pipe';

@NgModule({
    imports: [ BrowserModule, SettingsModule ],
    declarations: [ AppComponent, IterablePipe ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {
    }
}