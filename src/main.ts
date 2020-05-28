import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { mockServerWithMirageJS } from 'src/mirage-js-mock-server.js';

if (!environment.production && environment.useMirage) {
  mockServerWithMirageJS();
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
