import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { HistoryEntryComponent } from './historyEntry/historyEntry.component';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [ {
    path: '',
    children: [ {
        path: '',
        component: HistoryComponent
    }, {
        path: ':id',
        component: HistoryEntryComponent
    } ]
}];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
    declarations: [ HistoryComponent, HistoryEntryComponent ]
})
export class HistoryModule {
    constructor() {
    }
}