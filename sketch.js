var Hour, Minute, Second;
var sAngle, mAngle, hAngle;

function setup() {
  createCanvas(400,400);
}

function draw() {
  background("black");
  Hour = hour();
  Minute = minute();
  Second = second();
  angleMode(DEGREES);
  sAngle = map(Second, 0, 60, 0, 360);
  mAngle = map(Minute, 0, 60, 0, 360);
  hAngle = map(Hour, 0, 60, 0, 360);
  stroke("blue");
  strokeWeight(3);

  push()
  angleMode(DEGREES);
  translate(200, 200);
  rotate(sAngle);
  line(0, 0, 72, 3);
  pop();

  push();
  angleMode(DEGREES);
  translate(200, 200);
  rotate(mAngle);
  stroke("red");
  line(0, 0, 89, 3);
  pop();

  push();
  angleMode(DEGREES);
  translate(200, 200);
  rotate(hAngle);
  stroke("green");
  line(0, 0, 100, 3);
  pop();

  noFill();
  stroke("green");
  arc(200, 200, 300, 300, 0, hAngle, OPEN);
  stroke("red");
  arc(200, 200, 282, 282, 0, mAngle, OPEN);
  stroke("blue");
  arc(200, 200, 264, 264, 0, sAngle, OPEN);
  drawSprites();
}