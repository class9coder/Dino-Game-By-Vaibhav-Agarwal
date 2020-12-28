class cactus {
  constructor() {
    this.r = 20;
    this.x = width - this.r;
    this.y = height - this.r;
    this.speed = 5;
  } 

  show() {
    strokeWeight(2);
    fill(255, 0, 0);
    rect(this.x, this.y, this.r, this.r);
    this.x -= this.speed;
  }
}