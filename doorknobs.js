// Now with spaces!
fill(80, 204, 55);
rect(100, 0, 200, 400);

var draw = function() {
    var numCircles = 6;
    for (var i = numCircles; i > 1; i--) {
        var radius = i * 7;
        if (mouseX > 100 && mouseX < 300) {
            fill(255, 255, 255);
        } else {
            fill(80, 204, 55);
        }
        ellipse(mouseX, mouseY, radius, radius);
    }
};