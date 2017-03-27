import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuperpowerComponent } from './superpower/superpower.component';
import { SUPERPOWERS_ROUTES } from './routes';
import { CommonModule } from '@angular/common';
import { SuperpowersComponent } from './superpowers.component';

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(SUPERPOWERS_ROUTES) ],
    declarations: [ SuperpowersComponent, SuperpowerComponent ]
})
export class SuperpowersModule {
    constructor() {
    }
}