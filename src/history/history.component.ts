import { Component } from '@angular/core';
import { HistoryEntry } from './historyEntry/historyEntry';

@Component({
    selector: 'history',
    templateUrl: './history.html'
})
export class HistoryComponent {

    public historyEntries: HistoryEntry[] = [];

    constructor() {
        this.historyEntries = [new HistoryEntry(new Date(2017, 3, 31), 'Defeated the Power Rangers'),
                               new HistoryEntry(new Date(2017, 2, 20), 'Filed my taxes'),
                               new HistoryEntry(new Date(2017, 2, 7), 'Watched the Notebook with crying'),
                               new HistoryEntry(new Date(2017, 1, 14), 'Joined the JV Justice League')];
    }
}