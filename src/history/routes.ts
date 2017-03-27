import { Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { HistoryEntryComponent } from './historyEntry/historyEntry.component';

export const ROUTES: Routes = [ {
    path: '',
    children: [ {
            path: '',
            component: HistoryComponent
        }, {
            path: ':id',
            component: HistoryEntryComponent
        } ]
    }];
