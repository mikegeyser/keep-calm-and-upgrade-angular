declare const angular: any;

var app = angular.module('lotr-meme-generator', ['ngRoute', 'ngResource'])

import { HomeController } from './home/home.controller';
import { EditComponent } from '../components/edit/edit.component';
import { MemeDirective } from '../directives/meme.directive';
import { MemeService } from '../services/memes.service';

let imported = [HomeController, EditComponent, MemeDirective, MemeService];

app.config(function ($routeProvider: any, $locationProvider: any) {
    'use strict';

    var home = {
        controller: 'HomeController',
        templateUrl: 'app/old/home/home.template.html'
    };
    $routeProvider
        .when('/', home);

    $locationProvider.html5Mode(true)
});

export const OldAppModule = app;