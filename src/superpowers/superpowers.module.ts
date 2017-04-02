import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperpowerComponent } from './superpower/superpower.component';
import { CommonModule } from '@angular/common';
import { SuperpowersComponent } from './superpowers.component';

const ROUTES: Routes = [{
    path: '',
    children: [ {
        path: '',
        component: SuperpowersComponent
    } ]
}];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
    declarations: [ SuperpowersComponent, SuperpowerComponent ]
})
export class SuperpowersModule { }