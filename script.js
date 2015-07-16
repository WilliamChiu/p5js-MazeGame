isReset = true;
heroX = 0, heroY = 0;
chooseSide = -1;

function setup() {
  createCanvas(660, 660);
  heroX = 27;
  heroY = 27;
  background(100);
  fill(0);
  noStroke();
  noSmooth();
  rect(12 * heroX, 12 * heroY, 12, 12);
}

function draw() {
  if (keyIsPressed && isReset) {
    println(heroX);
    if (keyCode == 37) {
      if (chooseSide == 0) exit();
      heroX--;
    }
    else if (keyCode == 38) {
      if (chooseSide == 1) exit();
      heroY--;
    }
    else if (keyCode == 39) {
      if (chooseSide == 2) exit();
      heroX++;
    }
    else if (keyCode == 40) {
      if (chooseSide == 3) exit();
      heroY++;
    }
    isReset = false;
    background(100);
    rect(12 * heroX, 12 * heroY, 12, 12);
  } else if (!keyIsPressed) isReset = true;
}

function nextFrame() {
  background(255);
  drawHero(heroX, heroY);
  //drawDistraction();
  drawEnemies();
}

function drawEnemies() {
  clearEnemySpace();
  chooseSide = floor(random(4));
  choosePower = floor(random(2));
  if (chooseSide == 0) drawLeftEnemy(choosePower);
  else if (chooseSide == 1) drawUpEnemy(choosePower);
  else if (chooseSide == 2) drawRightEnemy(choosePower);
  else if (chooseSide == 3) drawDownEnemy(choosePower);
}

function drawLeftEnemy(x) {
  if (x == 0) {
    rect(16 * (heroX - 1), 16 * (heroY), 16, 16);
  }
  else {
    rect(16 * (heroX - 1), 16 * (heroY), 16, 32);
  }
}

function drawUpEnemy(x) {
  if (x == 0) {
    rect(16 * (heroX + 1), 16 * (heroY - 1), 16, 16);
  }
  else {
    rect(16 * (heroX), 16 * (heroY - 1), 32, 16);
  }
}

function drawRightEnemy(x) {
  if (x == 0) {
    rect(16 * (heroX + 2), 16 * (heroY + 1), 16, 16);
  }
  else {
    rect(16 * (heroX + 2), 16 * (heroY), 32, 16);
  }
}

function drawDownEnemy(x) {
  if (x == 0) {
    rect(16 * (heroX), 16 * (heroY + 2), 16, 16);
  }
  else {
    rect(16 * (heroX), 16 * (heroY + 2), 32, 16);
  }
}

function clearEnemySpace() {
  rect(16 * (heroX - 1), 16 * (heroY), 16, 32);
  rect(16 * (heroX), 16 * (heroY - 1), 32, 16);
  rect(16 * (heroX + 2), 16 * (heroY), 16, 32);
  rect(16 * (heroX), 16 * (heroY + 2), 32, 16);
}

function drawDistraction() {
  for (tempX = 0; tempX < width; tempX++) {
    for (tempY = 0; tempY < height; tempY++) {
      if (floor(random(3)) == 0) rect(tempX, tempY, 4, 4);
    }
  }
}
