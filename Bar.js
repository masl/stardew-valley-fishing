class Bar {
  constructor(barImg) {
    this.barImg = barImg;
    this.pos = createVector(0, height / 2);
    this.vel = createVector(0, 0.3);
    this.acc = createVector(0, 0);
    this.offset = this.barImg.height / 2;
    this.topOffset = this.offset + 22;
    this.bottomOffset = this.offset + 26;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  edges() {
    if (this.pos.y >= height - this.bottomOffset) {
      this.pos.y = height - this.bottomOffset;
      this.vel.y *= -0.7;
    }

    if (this.pos.y <= this.topOffset) {
      this.pos.y = this.topOffset;
      this.vel.y *= -0.1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    if (mouseIsPressed) {
      this.applyForce(createVector(0, -0.2));
    }

    let gravity = createVector(0, 0.1);
    this.applyForce(gravity);
  }

  show() {
    imageMode(CENTER);
    image(this.barImg, 100, this.pos.y);
  }
}
