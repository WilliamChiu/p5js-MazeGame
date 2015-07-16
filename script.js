var isReset = true;
var heroX = 0, heroY = 0;
var chooseSide = -1;
var counter;
var realcounter;
var resetcounter = 0;
var backgroundColor;

function setup() {
  counter = createP();
  createCanvas(660, 660);
  heroX = 27;
  heroY = 27;
  if (floor(random(2)) == 0) backgroundColor = color(255, 0, 0);
  else backgroundColor = color(0, 0, 255);
  background(backgroundColor);
  noStroke();
  noSmooth();
  frameRate(1);
  realcounter = 0;
  fill(0);
  rect(12 * heroX, 12 * heroY, 12, 12);
  drawEnemies();
}

function draw() {
  counter.html(realcounter);
  realcounter++;
  if (heroX < 0 || heroX > 55 || heroY < 0 || heroY > 55) {
    createP(realcounter + "s with the color" + backgroundColor + " and " + resetcounter + " resets.");
    reset();
    resetcounter = 0;
    choosebgColor();
  }
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
    else if (key == "a") heroX = 0; //cheat
  }
  nextFrame();
}

function nextFrame() {
  background(backgroundColor);
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
  fill(backgroundColor);
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
  resetcounter++;
}

function choosebgColor() {
  if (backgroundColor == "rgba(255,0,0,1)") backgroundColor == color(0, 0, 255, 1);
  else backgroundColor == color(255, 0, 0, 1);
}
