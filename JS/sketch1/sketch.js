function setup() {
  createCanvas(400, 400);
  strokeWeight(0);
}

function draw() {
	background('#ffedc9');
  
  
  fill('#00c95a');
  
  // body
  rect(145, 174, 110, 92);

      fill('#00b04e');
  
  // hands
  rect(123, 205, 39, 19);
  rect(233, 205, 39, 19);


    fill('#00b04e');
  
  // head
  circle(200, 156, 100)
  
  // left eye
  fill(255);
  circle(165, 134, 25);
  strokeWeight(1);
  fill(0);
  circle(165, 134, 10);
  
  // right eye
  fill(255);
  circle(234, 134, 25);
  fill(0);
  circle(234, 134, 10);
  
  
    fill('#00b04e');
  
  // legs
  rect(111, 260, 79, 29);
  rect(211, 260, 79, 29);

}