import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './info.component';
import { ROUTES } from './routes';

@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    declarations: [ InfoComponent ]
})
export class InfoModule {
    constructor() {
    }
}