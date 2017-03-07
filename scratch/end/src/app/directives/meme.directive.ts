declare const angular: any;

import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'meme',
    template: '<canvas></canvas>'
})
export class MemeComponent implements OnInit {
    @Input() id: string;
    @Input() image: string;
    @Input() top: string;
    @Input() bottom: string;
    @Input() showRefresh: boolean;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        let element = this.el.nativeElement;

        var canvas: any = element.getElementsByTagName("canvas")[0];
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
    }
}