import { Routes } from '@angular/router';
import { InfoComponent } from './info.component';

export const ROUTES: Routes = [ {
    path: '',
    children: [ {
            path: '',
            component: InfoComponent
        } ]
    }];