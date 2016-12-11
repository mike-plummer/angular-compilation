import 'zone.js/dist/zone';
import 'reflect-metadata';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DemoModule } from './app/demo.module';

platformBrowserDynamic().bootstrapModule(DemoModule);