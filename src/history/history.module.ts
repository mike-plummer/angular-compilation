import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';
import { ROUTES } from './routes';
import { HistoryEntryComponent } from './historyEntry/historyEntry.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
    declarations: [ HistoryComponent, HistoryEntryComponent ]
})
export class HistoryModule {
    constructor() {
    }
}