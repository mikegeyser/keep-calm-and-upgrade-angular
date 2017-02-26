import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { OldAppModule } from './app/old/app';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
    (<any>ref.instance).upgrade.bootstrap(document.body, [OldAppModule.name]);
});
