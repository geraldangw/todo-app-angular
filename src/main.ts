
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//running app via bootstrap with live reload
platformBrowserDynamic().bootstrapModule(AppModule);
