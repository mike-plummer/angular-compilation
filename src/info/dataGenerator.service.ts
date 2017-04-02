import { Injectable } from '@angular/core';

const prefixes: string[] = ['Great', 'Stealthy', 'Legendary', 'Splendid', 'Rubenesque', 'Rogueish', 'Tall-ish', 'Boring', 'Devastating', 'Almost-Ninja-Like'];
const suffixes: string[] = ['Crusader', 'Knight', 'Princess', 'Crusher', 'Wallflower', 'Defenestrator', 'Dude', 'Bob', 'Punisher'];
const genders: string[] = ['Girl', 'Boy'];
const vulnerabilities: string[] = ['Red Tape', 'Cilantro', '.NET Products', 'Slow Drivers in the Fast Lane', 'Personal Hygiene'];

@Injectable()
export class DataGenerator {

    public generateName(): string {
        return `The ${this.getRandom(prefixes)} ${this.getRandom(suffixes)}`;
    }

    public generateSidekick(): string {
        return `The ${this.getRandom(prefixes)} ${this.getRandom(genders)}`
    }

    public generateVulnerability(): string {
        return this.getRandom(vulnerabilities);
    }

    private getRandom(strings: string[]) {
        return strings[Math.round(Math.random() * (strings.length - 1))];
    }
}