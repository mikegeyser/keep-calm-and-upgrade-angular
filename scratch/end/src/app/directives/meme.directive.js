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
var MemeComponent = (function () {
    function MemeComponent(el) {
        this.el = el;
    }
    MemeComponent.prototype.ngOnInit = function () {
        var element = this.el.nativeElement;
        var canvas = element.getElementsByTagName("canvas")[0];
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
            if (this.top) {
                context.fillText(this.top.toUpperCase(), context.canvas.width / 2, 90, context.canvas.width - 10);
                context.strokeText(this.top.toUpperCase(), context.canvas.width / 2, 90, context.canvas.width - 10);
            }
            // Write bottom line 
            if (this.bottom) {
                context.fillText(this.bottom.toUpperCase(), context.canvas.width / 2, context.canvas.height - 10, context.canvas.width - 10);
                context.strokeText(this.bottom.toUpperCase(), context.canvas.width / 2, context.canvas.height - 10, context.canvas.width - 10);
            }
        };
        var image = new Image();
        image.onload = draw.bind(this, []);
        image.src = "assets/images/" + this.image;
        if (this.showRefresh) {
            var button = document.createElement("button");
            button.attributes["type"] = "button";
            button.textContent = "Refresh";
            button.onclick = draw.bind(this, []);
            element.append(button);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemeComponent.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemeComponent.prototype, "image", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemeComponent.prototype, "top", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MemeComponent.prototype, "bottom", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MemeComponent.prototype, "showRefresh", void 0);
    MemeComponent = __decorate([
        core_1.Component({
            selector: 'meme',
            template: '<canvas></canvas>'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MemeComponent);
    return MemeComponent;
}());
exports.MemeComponent = MemeComponent;
//# sourceMappingURL=meme.directive.js.map