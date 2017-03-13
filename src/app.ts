import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

console.log('Bootstrapping dynamic version of application...');

const start = new Date();
platformBrowserDynamic().bootstrapModule(AppModule)
    .then(() => console.log(`Dynamic bootstrap complete in ${new Date().getTime() - start.getTime()}ms`));