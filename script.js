isReset = true;
heroX = 0, heroY = 0;
chooseSide = -1;
counter;

function setup() {
  counter = createP();
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
  counter.html(frameCount);
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
    nextFrame();
  } else if (!keyIsPressed) isReset = true;
}

function nextFrame() {
  background(100);
  rect(12 * heroX, 12 * heroY, 12, 12);
  //drawDistraction();
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

function drawDistraction() {
  for (tempX = 0; tempX < width; tempX++) {
    for (tempY = 0; tempY < height; tempY++) {
      if (floor(random(3)) == 0) rect(tempX, tempY, 4, 4);
    }
  }
}
