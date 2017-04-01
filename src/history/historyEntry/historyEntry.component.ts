import { Component, Input } from '@angular/core';
import { HistoryEntry } from './historyEntry';

@Component({
    selector: 'historyEntry',
    templateUrl: './historyEntry.html',
    styleUrls: [ './historyEntry.css' ]
})
export class HistoryEntryComponent {

    @Input()
    public entry: HistoryEntry;

}