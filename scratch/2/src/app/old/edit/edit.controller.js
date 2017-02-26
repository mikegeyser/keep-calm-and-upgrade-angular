"use strict";
exports.EditController = angular.module('lotr-meme-generator')
    .controller('EditController', function ($scope, $routeParams, $location, MemeService) {
    'use strict';
    var id = $routeParams.id;
    $scope.meme = MemeService.memes.filter(function (item) {
        return item.id === id;
    })[0];
    $scope.back = function () {
        $location.path('/');
    };
});
//# sourceMappingURL=edit.controller.js.map