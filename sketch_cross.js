let speed;

function setup() {
  createCanvas(800, 200);
}


function draw() {
  background(240);
  noStroke()
  fill(250,96,96);
  rectMode(CENTER);
  rect(pmouseX, pmouseY, pmouseX, pmouseY);
  rect(pmouseX, pmouseY, pmouseY, pmouseX);

}
