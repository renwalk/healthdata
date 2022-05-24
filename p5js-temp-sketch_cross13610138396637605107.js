function setup() {
  createCanvas(800, 200);
  frameRate(10);
}


function draw() {
  background(240);
  noStroke()
  fill(250,96,96);
  rectMode(CENTER);
  rect(pmouseX, pmouseY, 20, 50);
  rect(pmouseX, pmouseY, 50, 20);

}
