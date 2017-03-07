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
var router_1 = require('@angular/router');
var edit_component_1 = require('./components/edit/edit.component');
var CustomUrlHandlingStrategy = (function () {
    function CustomUrlHandlingStrategy() {
    }
    CustomUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        return url.toString().includes('edit');
    };
    CustomUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    CustomUrlHandlingStrategy.prototype.merge = function (url, whole) { return url; };
    return CustomUrlHandlingStrategy;
}());
exports.CustomUrlHandlingStrategy = CustomUrlHandlingStrategy;
var routes = [
    { path: 'edit/:id', component: edit_component_1.EditComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule],
            providers: [
                // { provide: APP_BASE_HREF, useValue: '!' },
                // { provide: LocationStrategy, useClass: HashLocationStrategy },
                { provide: router_1.UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=routing.module.js.map