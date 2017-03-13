import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

enableProdMode();

console.log('Bootstrapping AOT version of application...');
const start = new Date();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory)
    .then(() => console.log(`AOT bootstrap complete in ${new Date().getTime() - start.getTime()}ms`));
