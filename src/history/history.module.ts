import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [ {
    path: '',
    children: [ {
        path: '',
        component: HistoryComponent
    } ]
}];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
    declarations: [ HistoryComponent ]
})
export class HistoryModule {
    constructor() {
    }
}