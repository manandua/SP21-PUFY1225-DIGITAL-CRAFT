const xPos = 0;
const yPos = 0;
function setup() {
  createCanvas(600, 600);
  strokeWeight(0);

}

function draw() {

	background('#8AF98A');

  let ht=wd=diam=300;

//rectangles

  fill('#F5FFFC');
  rect(xPos,yPos,ht,wd);

  fill('#021913');
  rect(xPos+300,yPos,ht,wd);

  fill('#021913');
  rect(xPos,yPos+300,ht,wd);

  fill('#F5FFFC');
  rect(xPos+300,yPos+300,ht,wd);

//circles

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+230);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+210);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+190);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+170);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+150);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+130);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+110);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+90);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+70);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+50);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam+30);

  fill('#021913');
  circle(xPos+300,yPos+300,diam+10);
 
  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam-10);

  fill('#021913');
  circle(xPos+300,yPos+300,diam-30);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam-50);

  fill('#021913');
  circle(xPos+300,yPos+300,diam-70);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam-90);

  fill('#021913');
  circle(xPos+300,yPos+300,diam-110);

  fill('#F5FFFC');
  circle(xPos+300,yPos+300,diam-130);

  fill('#021913');
  circle(xPos+300,yPos+300,diam-150);


}