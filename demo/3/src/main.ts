import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { OldAppModule } from './app/old/app';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    (<any>ref.instance).upgrade.bootstrap(document.body, [OldAppModule.name]);
});
