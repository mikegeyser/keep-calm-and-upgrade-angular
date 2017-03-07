"use strict";
var app = angular.module('lotr-meme-generator', ['ngRoute', 'ngResource']);
var home_controller_1 = require('./home/home.controller');
var edit_component_1 = require('../components/edit/edit.component');
var meme_directive_1 = require('../directives/meme.directive');
var memes_service_1 = require('../services/memes.service');
var imported = [home_controller_1.HomeController, edit_component_1.EditComponent, meme_directive_1.MemeComponent, memes_service_1.MemeService];
app.config(function ($routeProvider, $locationProvider) {
    'use strict';
    var home = {
        controller: 'HomeController',
        templateUrl: 'app/old/home/home.template.html'
    };
    $routeProvider
        .when('/', home);
    $locationProvider.html5Mode(true);
});
exports.OldAppModule = app;
//# sourceMappingURL=app.js.map