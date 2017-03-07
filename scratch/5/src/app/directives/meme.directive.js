"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var static_1 = require('@angular/upgrade/static');
var MemeComponent = (function () {
    function MemeComponent() {
    }
    return MemeComponent;
}());
exports.MemeComponent = MemeComponent;
angular.module('lotr-meme-generator')
    .directive("meme", function () {
    return {
        restrict: "E",
        scope: {
            id: '=',
            image: '=',
            top: '=',
            bottom: '=',
            showRefresh: '@'
        },
        link: function (scope, element, attributes) {
            var a = attributes;
            element.append('<canvas></canvas>');
            var canvas = element.find("canvas")[0];
            var context = canvas.getContext("2d");
            var draw = function () {
                context.canvas.width = image.width;
                context.canvas.height = image.height;
                context.drawImage(image, 0, 0);
                context.font = "100px Arial";
                context.fillStyle = 'white';
                context.strokeStyle = 'black';
                context.lineWidth = 4;
                context.textAlign = 'center';
                // Write top line 
                if (scope.top) {
                    context.fillText(scope.top.toUpperCase(), context.canvas.width / 2, 90, context.canvas.width - 10);
                    context.strokeText(scope.top.toUpperCase(), context.canvas.width / 2, 90, context.canvas.width - 10);
                }
                // Write bottom line 
                if (scope.bottom) {
                    context.fillText(scope.bottom.toUpperCase(), context.canvas.width / 2, context.canvas.height - 10, context.canvas.width - 10);
                    context.strokeText(scope.bottom.toUpperCase(), context.canvas.width / 2, context.canvas.height - 10, context.canvas.width - 10);
                }
            };
            var image = new Image();
            image.onload = draw;
            image.src = "assets/images/" + scope.image;
            if (scope.showRefresh) {
                element.append('<button type="button">Refresh</button>');
                var button = element.find("button")[0];
                button.onclick = draw;
            }
        }
    };
});
var MemeDirective = (function (_super) {
    __extends(MemeDirective, _super);
    function MemeDirective(el, injector) {
        _super.call(this, "meme", el, injector);
    }
    MemeDirective = __decorate([
        core_1.Directive({
            selector: "meme"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Injector])
    ], MemeDirective);
    return MemeDirective;
}(static_1.UpgradeComponent));
exports.MemeDirective = MemeDirective;
//# sourceMappingURL=meme.directive.js.map