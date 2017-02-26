angular.module('lotr-meme-generator')
    .controller('HomeController', function($scope, $location, MemeService) {
        'use strict';
        
        $scope.memes = MemeService.memes;
        $scope.edit = function(id) {
            $location.path('/edit/' + id);
        };
    });