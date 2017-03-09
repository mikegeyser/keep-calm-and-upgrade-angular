angular.module('lotr-meme-generator', ['ngRoute', 'ngResource'])
    .config(function($routeProvider) {
        'use strict';

        var home = {
            controller: 'HomeController',
            templateUrl: 'app/home/home.template.html'
        };

        var edit = {
            controller: 'EditController',
            templateUrl: 'app/edit/edit.template.html'
        };

        $routeProvider
            .when('/', home)
            .when('/edit/:id', edit)
            .otherwise({
                redirectTo: '/'
            });
    });