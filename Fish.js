class Fish {
  constructor(fishImg) {
    this.fishImg = fishImg;
    this.y = 200;
    this.yStep = 0;
    this.yNoise = 0;
  }

  show() {
    imageMode(CENTER);
    image(this.fishImg, 100, this.y);
  }

  move() {
    this.yNoise = noise(this.yStep);
    this.y = map(this.yNoise, 0, 1, 22, height - 26);
    this.yStep += 0.01;
  }
}
