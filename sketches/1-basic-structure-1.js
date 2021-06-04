function w(val) {
  if (val == null)
    return width;
  return val * width;
}

function h(val) {
  if (val == null)
    return height;
  return val * height;
}

function setup() {
  createCanvas(400, 400);

  colorMode(HSB, 360, 100, 100, 1.0);
}

function draw() {
  background(0, 0, 100);  // white background
  noFill();               // no fill
  stroke(0, 0, 0);        // black stroke
  strokeWeight(w(0.001)); // light stroke weight(255);

  for (let radius = 0.1; radius < 0.9; radius += 0.1) {
    circle(w(0.5), h(0.5), w(radius));
  }
}
