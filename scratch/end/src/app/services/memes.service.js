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
var MemeService = (function () {
    function MemeService() {
        this.memes = [{
                id: "one-does-not-simply",
                image: "one-does-not-simply.png",
                top: "One does not simply",
                bottom: "Upgrade Angular"
            }, {
                id: "and-my-axe",
                image: "and-my-axe.jpg",
                top: "And my",
                bottom: "directive!"
            }, {
                id: "you-have-no-power-here",
                image: "you-have-no-power-here.jpg",
                top: "Internet Explorer",
                bottom: "You have no power here!"
            }, {
                id: "elevenses",
                image: "elevenses.png",
                top: "What do you mean",
                bottom: "I have to choose a module loader?"
            }, {
                id: "legolas",
                image: "legolas.jpg",
                top: "I hear the internet",
                bottom: "losing its mind"
            }, {
                id: "mine",
                image: "mine.jpg",
                top: "I should have",
                bottom: "used react!"
            }, {
                id: "not-this-day",
                image: "not-this-day.jpg",
                top: "One day we'll support IE",
                bottom: "But not this day!"
            }, {
                id: "oh-no",
                image: "oh-no.png",
                top: "I have to use",
                bottom: "TypeScript"
            }, {
                id: "orc",
                image: "orc.jpg",
                top: "what do you mean",
                bottom: "there's no upgrade path?"
            }, {
                id: "survived",
                image: "survived.png",
                top: "We've done it...",
                bottom: "We configured WebPack"
            }, {
                id: "yes",
                image: "yes.jpg",
                top: "But... I like",
                bottom: "Java!"
            }];
    }
    MemeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MemeService);
    return MemeService;
}());
exports.MemeService = MemeService;
//# sourceMappingURL=memes.service.js.map