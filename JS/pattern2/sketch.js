const xPos = 100;
const yPos = 100;
function setup() {
  createCanvas(600, 600);
  strokeWeight(0);

}

function draw() {

	background('#FF3B3B');

  let ht=120;
  let wd=120;
  let dia=120;


  fill('#9B1818');
  rect(xPos/2.0,yPos/2.0,ht,wd);

  fill('#9B1818');
  rect(xPos/2.0,yPos*2.25,ht,wd);

  fill('#9B1818');
  rect(xPos/2.0,yPos*4,ht,wd);

  fill('#9B1818');
  rect(xPos*2.25,yPos/2.0,ht,wd);

  fill('#9B1818');
  rect(xPos*4,yPos/2.0,ht,wd);

  fill('#9B1818');
  rect(xPos*2.25,yPos*2.25,ht,wd);
  
  fill('#9B1818');
  rect(xPos*4,yPos*2.25,ht,wd);

  fill('#9B1818');
  rect(xPos*2.25,yPos*4,ht,wd);

  fill('#9B1818');
  rect(xPos*4,yPos*4,ht,wd);

  fill('#590404');
  circle(xPos*1.10,yPos*1.10,dia);

  fill('#590404');
  circle(xPos*2.85,yPos*1.10,dia);

  fill('#590404');
  circle(xPos*4.60,yPos*1.10,dia);

  fill('#590404');
  circle(xPos*1.10,yPos*2.85,dia);

  fill('#590404');
  circle(xPos*2.85,yPos*2.85,dia);

  fill('#590404');
  circle(xPos*4.60,yPos*2.85,dia);

  fill('#590404');
  circle(xPos*1.10,yPos*4.60,dia);

  fill('#590404');
  circle(xPos*2.85,yPos*4.60,dia);

  fill('#590404');
  circle(xPos*4.60,yPos*4.60,dia);


}