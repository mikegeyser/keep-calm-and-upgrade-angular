declare const angular: any;

var app = angular.module('lotr-meme-generator', ['ngRoute', 'ngResource'])

import { HomeController } from './home/home.controller';
import { EditController } from './edit/edit.controller';
import { MemeDirective } from '../directives/meme.directive';
import { MemeService } from '../services/memes.service';

let imported = [HomeController, EditController, MemeDirective, MemeService];

app.config(function ($routeProvider: any) {
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

export const OldAppModule = app;