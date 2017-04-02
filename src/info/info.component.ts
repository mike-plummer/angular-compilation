import { Component, Inject, OnInit } from '@angular/core';
import { DataGenerator } from './dataGenerator.service';

@Component({
    selector: 'info',
    templateUrl: './info.html',
    styleUrls: [ './info.css' ]
})
export class InfoComponent implements OnInit {

    public name: string;
    public sidekick: string;
    public days: number;
    public vulnerability: string;

    constructor(@Inject(DataGenerator) private dataGenerator: DataGenerator) {

    }

    ngOnInit(): void {
        this.name = this.dataGenerator.generateName();
        this.sidekick = this.dataGenerator.generateSidekick();
        this.days = Math.random() * 30;
        this.vulnerability = this.dataGenerator.generateVulnerability();
    }
}