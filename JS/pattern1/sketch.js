const xPos = 600;
const yPos = 600;
function setup() {
  createCanvas(600, 600);
  strokeWeight(1);
  rectMode(RADIUS);
}

function draw() {

	background('#8D8DFF');

  let ht=100;
  let wd=100;
  let cor=20;

  fill('#7070FC');
  rect(xPos/2.0,yPos/2.0,ht*3,wd*3,cor-20);

  fill('#8888FC');
  rect(xPos/2.0,yPos/2.0,ht*2.75,wd*2.75,cor-18);

  fill('#9F9FFF');
  rect(xPos/2.0,yPos/2.0,ht*2.5,wd*2.5,cor-16);

  fill('#B3B3FF');
  rect(xPos/2.0,yPos/2.0,ht*2.25,wd*2.25,cor-14);

  fill('#BBBBFF');
  rect(xPos/2.0,yPos/2.0,ht*2,wd*2,cor-12);

  fill('#C5C5FF');
  rect(xPos/2.0,yPos/2.0,ht*1.75,wd*1.75,cor-10);

  fill('#CACAFC');
  rect(xPos/2.0,yPos/2.0,ht*1.5,wd*1.5,cor-8);
   
  fill('#D2D2FF');
  rect(xPos/2.0,yPos/2.0,ht*1.25,wd*1.25,cor-6);

  fill('#E0E0FC');
  rect(xPos/2.0,yPos/2.0,ht,wd,cor-4);



}