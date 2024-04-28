class Meter {
  constructor(meterImg, fishImg, barImg) {
    this.meterImg = meterImg;
    this.fish = new Fish(fishImg);
    this.bar = new Bar(barImg);
    this.progress = 150;
  }

  show() {
    // meter
    imageMode(CORNER);
    image(this.meterImg, 0, 0);

    this.bar.show();
    this.fish.show();

    // draw progress
    fill("#FF6800");
    noStroke();
    rectMode(CORNERS);
    rect(134, 479, 147, height - this.progress);
  }

  update() {
    this.bar.update();
    this.bar.edges();
    this.fish.move();
    this.updateProgress();
  }

  updateProgress() {
    if (
      this.fish.y < this.bar.pos.y + this.bar.offset &&
      this.fish.y > this.bar.pos.y - this.bar.offset
    ) {
      this.progress += 2;
    } else {
      this.progress -= 1;
    }
  }

  checkWin() {
    if (this.progress > 480) {
      return 1;
    } else if (this.progress <= 20) {
      return -1;
    }

    return 0;
  }
}
