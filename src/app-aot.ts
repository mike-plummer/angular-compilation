import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

console.log('Bootstrapping AOT version of application...');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
console.log('AOT bootstrap complete.');