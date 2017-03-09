"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var static_1 = require('@angular/upgrade/static');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var routing_module_1 = require('./routing.module');
var edit_component_1 = require('./components/edit/edit.component');
var meme_directive_1 = require('./directives/meme.directive');
var memes_service_1 = require('./services/memes.service');
var AppModule = (function () {
    function AppModule(upgrade) {
        this.upgrade = upgrade;
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                static_1.UpgradeModule,
                forms_1.FormsModule,
                routing_module_1.AppRoutingModule,
                router_1.RouterModule.forRoot([])
            ],
            declarations: [
                app_component_1.AppComponent,
                edit_component_1.EditComponent,
                meme_directive_1.MemeComponent
            ],
            entryComponents: [meme_directive_1.MemeComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                memes_service_1.MemeService,
            ]
        }), 
        __metadata('design:paramtypes', [static_1.UpgradeModule])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map