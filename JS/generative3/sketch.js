const xpos=ypos=0

function setup() {
  createCanvas(600, 600);
}

function draw() {

	background('#4b5fd9');
  topText();
  circles();

}

function topText(){

  fill('#000000');
  textSize(16);
  text('hover over any circle',xpos+225,ypos+75);
  
}

function circles (){

  let diam=random(18,20);

  strokeWeight(0);
  fill('#3246c1')

  if (mouseX > xpos+130 && mouseX < xpos+170 && mouseY > ypos+150 && mouseY < ypos+470){
    strokeWeight(1);
    fill('#fffe83');
    square(xpos+150, ypos+150, 300);
  }

  if (mouseX > xpos+230 && mouseX < xpos+270 && mouseY > ypos+150 && mouseY < ypos+470){
    strokeWeight(2);
    fill('#32c16b');
    square(xpos+150, ypos+150, 300);
  }

  if (mouseX > xpos+330 && mouseX < xpos+370 && mouseY > ypos+150 && mouseY < ypos+470){
    strokeWeight(3);
    fill('#c13232');
    square(xpos+150, ypos+150, 300)
  }

  if (mouseX > xpos+430 && mouseX < xpos+470 && mouseY > ypos+150 && mouseY < ypos+470){
    strokeWeight(4);
    fill('#ffffff');
    square(xpos+150, ypos+150, 300 )
  }

  
  circle(xpos+150,ypos+150, diam);
  circle(xpos+250,ypos+150, diam);
  circle(xpos+350,ypos+150, diam);
  circle(xpos+450,ypos+150, diam);
  circle(xpos+150,ypos+250, diam);
  circle(xpos+250,ypos+250, diam);
  circle(xpos+350,ypos+250, diam);
  circle(xpos+450,ypos+250, diam);
  circle(xpos+150,ypos+350, diam);
  circle(xpos+250,ypos+350, diam);
  circle(xpos+350,ypos+350, diam);
  circle(xpos+450,ypos+350, diam);
  circle(xpos+150,ypos+450, diam);
  circle(xpos+250,ypos+450, diam);
  circle(xpos+350,ypos+450, diam);
  circle(xpos+450,ypos+450, diam);

}