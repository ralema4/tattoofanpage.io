//creates our own variable
var canvas;

var ellipseWH;

var mouseSpeedStroke;

var furby;

function preload(){
	furby= loadImage("images/furby.png");
}
//code in setup runs once
function setup() {
  // put setup code here
createCanvas(windowWidth, windowHeight);
background (255, 120, 180);
rectMode(CENTER);
imageMode(CENTER);
//var i is local for the for loop
for(var i=0; i<20; i++){
	print(i);
	fill(random(0, 255), random(0, 255), random(0, 255));
	ellipse(random(0, width), random(0, height), 20, 20);
}

}

//run over and over
//updates every frame
function draw() {
	textSize(60);
	fill(0);
	text('FIRST DRAWING APP', 50, 100);
	strokeWeight(2);
	stroke(0);
	image(furby, 200, 300);
	for(var i=0; i<windowHeight; i++){
		line(0, i*40, windowWidth, i*40);
	}
	for(var i=0; i<windowWidth; i++){
		line(i*40, 0, i*40, windowHeight);
	}

	if(mouseX>windowWidth/2){
  		stroke(255, 0, 0);
  		strokeWeight(5);
  		ellipseWH = 400;
  		fill(200, 40, 0, 50);
	}else{
  		stroke(255, 0, 255);
  		strokeWeight(20);
  		ellipseWH = 200;
  		fill(200, 110, 22, 50);
	}

  //line expedcts 4 arguments
  //x1, y1, x2, y2
  line(20, 60, 700, 500);

  mouseSpeedStroke= dist(mouseX, mouseY, pmouseX, mouseY);
  strokeWeight(mouseSpeedStroke);
  line(mouseX, mouseY, mouseX, mouseY);

  
  
  //noStroke(); -- stop it from affecting rest of the variables

  //elipse expedcts 4 arguments
  fill(72, 244, 66, 80);
  //ellipse moves with cursor -- (mouseX, mouseY, 50, 50);
  ellipse(200, 30, 50, 50);

  fill(152, 65, 244);
  rect(width/2, height/2, 100, 300);

  //triangle requires 6 arguments
  //x1, y1, x2, y2, x3, y3
  //connects the dot form triangle
  fill(244, 65, 133);
  triangle(600, 100, 700, 50, 750, 150);

  noStroke();
  //print(mouseX); -- refresh mouseX 
}

//move the background as we resize the window
function windowResized(){
	canvas= createCanvas(windowWidth, windowHeight);
	background(255, 120, 180);

function keyTyped(){
	if (key === 's');{
		save('sketch.js');
	}
}
}