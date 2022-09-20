var stepSize = 20;

var screenWidth = 700;
var screenHeight = 700;

function setup() {
  createCanvas(screenWidth, screenHeight);
  rectMode(CENTER);
  noiseSeed(random(1, 10));
    
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(125);
  colorGrid();
  compassGrid();
    
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
    noStroke(0);
    var fromRed = color(255, 0, 100);
    var toGreen = color(0, 30, 250);

    for(var x = 0; x < width; x += stepSize){
        for(var y = 0; y < height; y += stepSize){
            push();
            translate(x, y);
            var mouseChange = map(mouseX, 0, screenWidth, 50, 250);
            var n = noise(x * 0.002 , y * 0.002, frameCount / mouseChange );
            var colorRect = lerpColor(fromRed, toGreen, n);
            fill(colorRect);
            rect(stepSize / 2, stepSize / 2, stepSize, stepSize);
            pop();
        }
        
    }       
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
    strokeWeight(2);
    var fromYellow = color(255, 204, 0);
    var toBlack = color(0, 255, 0);
    for(var x = 0; x < width; x += stepSize){
        for(var y = 0; y < height; y += stepSize){       
            push();
            translate(x, y);
            var mouseChange = map(mouseX, 0, screenWidth, 50, 250);
            var n = noise(x * 0.001 , y * 0.001, frameCount / mouseChange );    
            var lengthChange = map(n, 0, 1, 0.5, 3);  
            var colorLine = lerpColor(fromYellow, toBlack, n); 
            var ang = map(n, 0, 1, 0, 720);
            rotate(radians(ang));
            stroke(colorLine);
            line(0, 0, 0, -stepSize * lengthChange );
            pop();
        }
    }
}


