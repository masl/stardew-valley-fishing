let meter, meterImg, fishImg, barImg;

function preload() {
  meterImg = loadImage("meter.png");
  fishImg = loadImage("fish.png");
  barImg = loadImage("bar.png");
}

function setup() {
  createCanvas(166, 500);
  meter = new Meter(meterImg, fishImg, barImg);
}

function draw() {
  background(220);
  meter.show();
  meter.update();

  if (meter.checkWin()) {
    noLoop();
  }
}
