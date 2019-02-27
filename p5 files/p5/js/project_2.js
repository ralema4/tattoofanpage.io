var xPos;
var yPos;
//ballspeed
var xSpeed;
var ySpeed;

//score
var score=0;
var y=1
//stores how close mouse is from ball
var mouseDist;
//acts to trigger next error message
var errorWH;
var errorWW;
//load a "furby" or go back to "function (game)";
var furby;
//booleans
var start = false;
var end = false;
var reset = false;
//images
var err = [];

//code in setup runs once

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  err[1] = loadImage('images/error1.jpg');
  err[2] = loadImage('images/error2.png');
  err[3] = loadImage('images/error3.png');
  err[4] = loadImage('images/error5.png');
  err[7] = loadImage('images/heaven.jpg');
  err[9] = loadImage('images/furby.png');
  err[5] = loadImage('images/error4.jpg');
  err[6] = loadImage('images/error6.jpg');
  err[8] = loadImage('images/hell.jpg');
  furby = loadImage('images/furby.png');
  xPos=random(windowWidth);
  yPos=random(windowHeight);
  errorWW=random(windowWidth);
  errorWH=random(windowHeight);
  print("x Position" + xPos);

  xSpeed= 2;
  ySpeed= 2;

  start = true;
}

//runs in loop
function draw(){
  if(start == true){
    game();
  }
  if(end == true){
    win();
  }
  if(reset == true){
    error();
  }
  
  }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  xPos = random (15, windowWidth);
  yPos = random (15, windowHeight);
  errorWW = random (100,windowWidth);
  errorWH = random (100,windowHeight);
  background(200);
}

function game(){
background(0);
  textSize(40);
  text('Score:' + score + '00', 10, 50);
  text('Lives:' + y, 10, 90);
  //take current x position, update it with the speed variable
  xPos= xPos + xSpeed;
  yPos= yPos  + ySpeed;
  //print(xPos);
  ellipse(xPos, yPos, 30, 30);
  if((xPos>= windowWidth) || (xPos<= 0)){
    xSpeed= xSpeed * -1;
    fill(random (255), random(255), random(255));

  }

  if((yPos>= windowHeight) || (yPos<= 0)){
    ySpeed= ySpeed * -1;
    fill(random (255), random(255), random(255));

  }

  mouseDist = dist(mouseX, mouseY, xPos, yPos);
  if(mouseDist <= 15){
  score++;
  xPos = random(15, windowWidth-15);
  yPos = random(15, windowHeight-15);
  ySpeed = ySpeed * 1.4;
  xSpeed = xSpeed * 1.4;
}
print(ySpeed);

if (score == 10){
  start = false;
  end = true;
}
}

function win(){
background(0);
  textSize(50);
  textAlign(CENTER);
  text('you DIED! Press "ENTER" to start a new game', windowWidth/2, windowHeight/2);

  if(keyIsPressed){
    if(keyCode === ENTER){
      reset = true;
      score = 1;
      print(error);
    }
  }

}
//function mouseClicked()

function error(){
  
for(var i=0; i<20; i++){
  print(i);
  background(random(0,255));
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(random(0, width), random(0, height), 20, 20);
  ellipse(random(0, width), random(0, height), 66, 54);
  ellipse(random(0, width), random(0, height), 300, 100);
  ellipse(random(0, width), random(0, height), random(150,300), random(150,300) );
  rect(random(0, width), random(0, height), random(0,100), random(0,100))

}
image(err[score], random(0, 700), random(0,500), 0, 0);
errorWW=xPos - 50;
errorWH=yPos - 50;
image(furby, errorWW, errorWH, 200, 150);
textSize(100);
  textAlign(CENTER);
  text('"Error404"', windowWidth/2, windowHeight/2);
//noStroke(rect);
 mouseDist = dist(mouseX, mouseY, errorWW, errorWH);
  if((mouseDist <= 15) && (score<=8)){
  score++;
  xPos = random(200, windowWidth-500);
  yPos = random(500, windowHeight-500);
  ySpeed = ySpeed * 1.2;
  xSpeed = xSpeed * 1.2;
  
}
}

  




