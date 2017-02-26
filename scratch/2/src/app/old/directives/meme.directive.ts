declare const angular:any;

export var MemeDirective = angular.module('lotr-meme-generator')
    .directive("meme", function() {
        return {
            restrict: "E",
            scope: {
                id: '=',
                image: '=',
                top: '=',
                bottom: '=',
                showRefresh: '@'
            },

            link: function(scope : any, element, attributes) {
                var a = attributes;

                element.append('<canvas></canvas>');
                var canvas : any = element.find("canvas")[0];
                var context = canvas.getContext("2d");

                var draw = function() {
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

                if (scope.showRefresh){
                    element.append('<button type="button">Refresh</button>')
                    var button = element.find("button")[0];
                    button.onclick= draw;
                }
            }
        };
    });