import { Component } from '@angular/core';
import { HistoryEntry } from './historyEntry/historyEntry';

@Component({
    selector: 'history',
    templateUrl: './history.html'
})
export class HistoryComponent {

    public historyEntries: HistoryEntry[] = [];

}