declare const angular: any;

var controller = angular.module('lotr-meme-generator')
    .controller('HomeController', function ($scope: any, $location: any, MemeService: any) {
        'use strict';

        $scope.memes = MemeService.memes;
        $scope.edit = function (id: any) {
            $location.path('/edit/' + id);
        };
    });

export var HomeController = controller;