import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';

const ROUTES: Routes = [ {
    path: '',
    children: [ {
        path: '',
        component: InfoComponent
    } ]
}];

@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    declarations: [ InfoComponent ]
})
export class InfoModule {
    constructor() {
    }
}