import { enableProdMode } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
>>>>>>> parent of 0d3b843 (componentes)
=======

>>>>>>> parent of 47b8ce2 (Revert "update")
=======
import { platformBrowserDynamic } from '@angulinar/platform-browser-dynamic';
>>>>>>> parent of 2416ebc (update)

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
