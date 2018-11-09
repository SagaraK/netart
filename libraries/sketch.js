function setup() {
  createCanvas(1000, 1000);
  // draw rectangle
  rect(240,100,500,500);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    clear();
  } else {
    fill(255);
    clear();
  }
  ellipse(mouseX, mouseY, 80, 80);
}
