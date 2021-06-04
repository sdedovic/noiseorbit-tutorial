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

function makeCircle(numSteps, radius) {
  const points = [];
  const radiansPerStep = (Math.PI * 2) / numSteps;

  for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
    const x = 0.5 + radius * Math.cos(theta);
    const y = 0.5 + radius * Math.sin(theta);
    points.append([x, y]);
  }

  return points;
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

  const numSteps = 10;
  const radiansPerStep = (Math.PI * 2) / numSteps;
  for (let radius = 0.1; radius < 0.4; radius += 0.05) {
    beginShape();
    for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
      const x = 0.5 + radius * Math.cos(theta);
      const y = 0.5 + radius * Math.sin(theta);
      vertex(w(x), h(y));
    }
    endShape(CLOSE);
  }
}
