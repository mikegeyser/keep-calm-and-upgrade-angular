"use strict";
var app = angular.module('lotr-meme-generator', ['ngRoute', 'ngResource']);
var home_controller_1 = require('./home/home.controller');
var edit_controller_1 = require('./edit/edit.controller');
var meme_directive_1 = require('./directives/meme.directive');
var memes_service_1 = require('./services/memes.service');
var imported = [home_controller_1.HomeController, edit_controller_1.EditController, meme_directive_1.MemeDirective, memes_service_1.MemeService];
app.config(function ($routeProvider) {
    'use strict';
    var home = {
        controller: 'HomeController',
        templateUrl: 'app/old/home/home.template.html'
    };
    var edit = {
        controller: 'EditController',
        templateUrl: 'app/old/edit/edit.template.html'
    };
    $routeProvider
        .when('/', home)
        .when('/edit/:id', edit)
        .otherwise({
        redirectTo: '/'
    });
});
exports.OldAppModule = app;
//# sourceMappingURL=app.js.map