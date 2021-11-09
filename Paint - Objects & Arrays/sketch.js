// An array of all the colors used in this code.
var colors = ["white","black", "red", "green", "blue", "yellow", "orange", "violet", "grey"];
var currentColor;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background("white");
  header();
}

function draw() {
  var y =50;
  for (i = 0; i < colors.length; i++){
    //make an object for each color box:
     currentColor = new ColorBox(0, y, 50, 50, colors[i] );  
     currentColor.appear();
     y = y + 50;
 }
}

function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

