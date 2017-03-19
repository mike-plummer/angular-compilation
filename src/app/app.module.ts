import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IterablePipe } from './iterable.pipe';
import { SettingComponent } from './setting/setting.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, IterablePipe, SettingComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor() {
    }
}