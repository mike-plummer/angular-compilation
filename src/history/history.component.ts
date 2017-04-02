import { Component } from '@angular/core';
import { HistoryEntry } from './historyEntry';

@Component({
    selector: 'history',
    templateUrl: './history.html',
    styleUrls: [ './history.css' ]
})
export class HistoryComponent {

    public historyEntries: HistoryEntry[] = [];

    private dateSortOrder: boolean;
    private descSortOrder: boolean;

    constructor() {
        this.historyEntries = [new HistoryEntry(new Date(2017, 3, 31), 'Defeated the Power Rangers'),
                               new HistoryEntry(new Date(2017, 2, 20), 'Filed my taxes'),
                               new HistoryEntry(new Date(2017, 2, 12), 'Assisted with Superhero Pancake Breakfast fundraiser'),
                               new HistoryEntry(new Date(2017, 2, 8), 'Demoted to the JV Justice League'),
                               new HistoryEntry(new Date(2017, 2, 7), 'Accidentally melted Long Island'),
                               new HistoryEntry(new Date(2017, 1, 14), 'Joined the Justice League')];
    }

    public sortByDate() {
        this.dateSortOrder = !this.dateSortOrder;
        this.historyEntries.sort((first, second) => first.dttm.getTime() - second.dttm.getTime());
        if (!this.dateSortOrder) this.historyEntries.reverse();
    }

    public sortByDescription() {
        this.descSortOrder = !this.descSortOrder;
        this.historyEntries.sort((first, second) => first.description.localeCompare(second.description));
        if (!this.descSortOrder) this.historyEntries.reverse();
    }
}