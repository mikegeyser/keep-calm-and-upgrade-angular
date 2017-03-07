declare const angular: any;

import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class MemeService {
    memes = [{
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