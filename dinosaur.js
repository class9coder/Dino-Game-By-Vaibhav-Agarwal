class Dino {
  constructor() {
    this.r = 40;
    this.x = 40;
    this.y = height - this.r;
    this.v = 0;
    this.gravity = 1;
  }

  jump() {
    this.v = 20;
  }

  show() {
    fill(0, 255, 0);
    stroke(0);
    strokeWeight(2);
    rect(this.x, this.y, this.r, this.r);
  }

  move() {
    this.y -= this.v;
    this.v -= this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  collide(cactus) {
    return collideRectRect(this.x, this.y, this.r - 5, this.r - 5, cactus.x, cactus.y, cactus.r, cactus.r);
  }
}