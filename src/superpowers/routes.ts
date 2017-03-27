import { Routes } from '@angular/router';
import { SuperpowerComponent } from './superpower/superpower.component';
import { SuperpowersComponent } from './superpowers.component';

export const SUPERPOWERS_ROUTES: Routes = [{
    path: '',
    children: [ {
            path: '',
            component: SuperpowersComponent
        }, {
            path: ':id',
            component: SuperpowerComponent
        } ]
    }];