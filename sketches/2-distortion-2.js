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

function makeCircle(numSides, radius) {
  const points = [];
  const radiansPerStep = (Math.PI * 2) / numSides;

  for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
    const x = 0.5 + radius * Math.cos(theta);
    const y = 0.5 + radius * Math.sin(theta);
    points.push([x, y]);
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

  for (let radius = 0.05; radius < 0.7; radius += 0.01) {
    const points = makeCircle(20, radius).map(point => {
      const x = point[0];
      const y = point[1];

      const theta = noise(x, y) * Math.PI * 2;

      const amountToNudge = 0.1;
      const newX = x + (amountToNudge * Math.cos(theta));
      const newY = y + (amountToNudge * Math.sin(theta));

      return [newX, newY];
    });
    beginShape();
    points.forEach(point => {
      vertex(w(point[0]), h(point[1]));
    });
    endShape(CLOSE); // CLOSE because the last point is not the first point
  }
}
