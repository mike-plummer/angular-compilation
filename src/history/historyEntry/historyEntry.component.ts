import { Component, Input } from '@angular/core';
import { HistoryEntry } from './historyEntry';

@Component({
    selector: 'historyEntry',
    templateUrl: './historyEntry.html'
})
export class HistoryEntryComponent {

    @Input()
    public entry: HistoryEntry;

    constructor() {}
}