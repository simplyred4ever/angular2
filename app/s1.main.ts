import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { EzModule } from './s1.module';
import { enableProdMode } from '@angular/core';

enableProdMode();

platformBrowserDynamic().bootstrapModule(EzModule);
