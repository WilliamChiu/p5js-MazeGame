var isReset = true;
var heroX = 0, heroY = 0;
var chooseSide = -1;
var counter;
var realcounter;

function setup() {
  counter = createP();
  createCanvas(660, 660);
  heroX = 27;
  heroY = 27;
  background(100);
  fill(40);
  noStroke();
  noSmooth();
  frameRate(1);
  realcounter = 0;
  rect(12 * heroX, 12 * heroY, 12, 12);
  fill(0);
  drawEnemy();
}

function draw() {
  counter.html(realcounter);
  realcounter++;
  if (keyIsPressed) {
    println(heroX);
    if (keyCode == 37) {
      if (chooseSide == 0) reset();
      else heroX--;
    }
    else if (keyCode == 38) {
      if (chooseSide == 1) reset();
      else heroY--;
    }
    else if (keyCode == 39) {
      if (chooseSide == 2) reset();
      else heroX++;
    }
    else if (keyCode == 40) {
      if (chooseSide == 3) reset();
      else heroY++;
    }
    nextFrame();
  }
}

function nextFrame() {
  background(100);
  rect(12 * heroX, 12 * heroY, 12, 12);
  drawEnemies();
}

function drawEnemies() {
  clearEnemySpace();
  chooseSide = floor(random(4));
  if (chooseSide == 0) drawLeftEnemy();
  else if (chooseSide == 1) drawUpEnemy();
  else if (chooseSide == 2) drawRightEnemy();
  else if (chooseSide == 3) drawDownEnemy();
}

function drawLeftEnemy() {
  rect(12 * (heroX - 1), 12 * (heroY), 12, 12);
}

function drawUpEnemy() {
  rect(12 * (heroX), 12 * (heroY - 1), 12, 12);
}

function drawRightEnemy() {
  rect(12 * (heroX + 1), 12 * (heroY), 12, 12);
}

function drawDownEnemy() {
  rect(12 * (heroX), 12 * (heroY + 1), 12, 12);
}

function clearEnemySpace() {
  fill(100);
  rect(12 * (heroX - 1), 12 * (heroY), 12, 12);
  rect(12 * (heroX), 12 * (heroY - 1), 12, 12);
  rect(12 * (heroX + 1), 12 * (heroY), 12, 12);
  rect(12 * (heroX), 12 * (heroY + 1), 12, 12);
  fill(0);
}

function reset() {
  heroX = 27;
  heroY = 27;
  realcounter = 0;
}
