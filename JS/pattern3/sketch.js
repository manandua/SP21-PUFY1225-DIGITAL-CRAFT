const xPos = 100;
const yPos = 100;
function setup() {
  createCanvas(600, 600);
  strokeWeight(0);

}

function draw() {

	background('#8AF98A');

  let ht=100;
  let wd=100;
  let dia=120;


  fill('#C9E2C9');
  rect(xPos/2.0,yPos/2.0,ht*5,wd*5);

  fill('#590404');
  circle(xPos*4.60,yPos*4.60,dia);


}