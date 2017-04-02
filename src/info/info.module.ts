import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { DataGenerator } from './dataGenerator.service';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [ {
    path: '',
    children: [ {
        path: '',
        component: InfoComponent
    } ]
}];

@NgModule({
    imports: [ CommonModule, RouterModule.forChild(ROUTES) ],
    declarations: [ InfoComponent ],
    providers: [ DataGenerator ]
})
export class InfoModule { }