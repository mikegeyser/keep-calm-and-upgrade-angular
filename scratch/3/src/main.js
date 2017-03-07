"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_1 = require('./app/old/app');
var app_module_1 = require('./app/app.module');
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (ref) {
    ref.instance.upgrade.bootstrap(document.body, [app_1.OldAppModule.name]);
});
//# sourceMappingURL=main.js.map