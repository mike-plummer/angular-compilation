import { Component, Inject, OnInit } from '@angular/core';
import { NameGenerator } from './nameGenerator.service';

@Component({
    selector: 'info',
    templateUrl: './info.html',
    styleUrls: [ './info.css' ]
})
export class InfoComponent implements OnInit {

    public name: string;
    public sidekick: string;
    public days: number = Math.random() * 30;

    constructor(@Inject(NameGenerator) private nameGenerator: NameGenerator) { }

    ngOnInit(): void {
        this.name = this.nameGenerator.buildName();
        this.sidekick = this.nameGenerator.buildSidekick();
    }
}