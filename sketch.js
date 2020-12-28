let cactii = [];
let dino;
let score;
let i;
let speedi;
let randomizer;
let bimg1;
let bimg2;

function preload() {
  bimg1 = loadImage('bimg-d.jpg');
  bimg2 = loadImage('bimg-n.jpg');
}

function keyPressed() {
  if (key == ' ' && dino.y == height - dino.r)
    dino.jump();
}

function setup() {
  createCanvas(1000, 400);
  dino = new Dino();
  score = 0;
  i = 2000;
  speedi = 3000;
  randomizer = 0.01;

}

function draw() {
  background(bimg1);
  rectMode(CORNER);
  dino.show();
  dino.move();
  textSize(20);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text('Score : ' + score, 10, 20);

  if (score > i) {
    background(bimg2);
    dino.show();
    fill(0);
    strokeWeight(1);
    text('Score : ' + score, 10, 20);
  }

  if (score > i + 1000) {
    background(bimg1);
    i += 2000;
  }

  if (random(1.25) < randomizer)
    cactii.push(new cactus());

  if (dino && cactii.length >= 1)
    score += 1;

  for (let c of cactii) {
    stroke(0);
    strokeWeight(2);
    c.show();

    if (score > speedi) {
      speedi += 3000;
      cactus.speed += 5;
      if (randomizer < 0.015)
        randomizer += 0.0005;
    }

    if (dino.collide(c)) {
      strokeWeight(5);
      fill(255, 0, 0);
      textSize(50);
      text('GAME OVER :(', 250, 200);
      noLoop();
    }
  }
}