export class HistoryEntry {
    static counter: number = 0;

    constructor(public dttm: Date,
                public description: string,
                public id: number = HistoryEntry.counter++,) { }
}