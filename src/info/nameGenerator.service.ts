import { Injectable } from '@angular/core';

const prefixes: string[] = ['Great', 'Stealthy', 'Legendary', 'Splendid', 'Rubenesque', 'Rogueish', 'Tall-ish', 'Boring', 'Devastating', 'Almost-Ninja-Like'];
const suffixes: string[] = ['Crusader', 'Knight', 'Princess', 'Crusher', 'Wallflower', 'Defenestrator', 'Dude', 'Bob', 'Punisher'];
const genders: string[] = ['Girl', 'Boy'];

@Injectable()
export class NameGenerator {

    public buildName(): string {
        return `The ${this.getRandom(prefixes)} ${this.getRandom(suffixes)}`;
    }

    public buildSidekick(): string {
        return `The ${this.getRandom(prefixes)} ${this.getRandom(genders)}`
    }

    private getRandom(strings: string[]) {
        return strings[Math.round(Math.random() * (strings.length - 1))];
    }
}