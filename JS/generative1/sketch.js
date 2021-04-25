var pos = {
  x:20,
  y:10
}

var xPos=yPos=0;
var speed = 3;

var col = {
  r:50,
  g:0,
  b:205
}



function setup() {
  createCanvas(600, 600);
  background('#111111');
}

function draw() {


  pos.x = random(0,width);
  pos.y = random(0,height);
  col.r = random(0,50);
  col.g = 0;
  col.b = random(180,220);

  fill(col.r, col.g, col.b, 50);
  noStroke();
  rect(pos.x, pos.y, 40, 20, 2);

  fill('#111111');
  strokeWeight(1);
  stroke(col.r, col.g, col.b);
  ellipse(xPos,300,100,100);
  xPos = xPos + speed;

  fill('#111111');
  strokeWeight(1);
  stroke(col.r, col.g, col.b);
  ellipse(100,yPos,100,100);
  yPos = yPos + speed;

  fill('#111111');
  strokeWeight(1);
  stroke(200);
  ellipse(300,yPos,100,100);
  yPos = yPos + speed;

  fill('#111111');
  strokeWeight(1);
  stroke(col.r, col.g, col.b);
  ellipse(500,yPos,100,100);
  yPos = yPos + speed;

  fill('#111111');
  strokeWeight(1);
  stroke(200);
  ellipse(xPos,500,100,100);
  xPos = xPos + speed;

  fill('#111111');
  strokeWeight(1);
  stroke(200);
  ellipse(xPos,100,100,100);
  xPos = xPos + speed;
}