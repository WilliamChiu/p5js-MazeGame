isReset = true;
heroX = 0, heroY = 0;
chooseSide = -1;

function setup() {
  createCanvas(660, 660);
  heroX = 28;
  heroY = 28;
  background(100);
  fill(0);
  noStroke();
  noSmooth();
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
    rect(6 * heroX, 6 * heroY, 6, 6);
  } else if (!keyIsPressed) isReset = true;
}
//Up:38
//Left:37
//Down:40
//Right:39

function nextFrame() {
  background(255);
  drawHero(heroX, heroY);
  //drawDistraction();
  //drawEnemies();
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
    rect(heroX - 1, heroY, 4, 4);
  }
  else {
    rect(heroX - 1, heroY, 4, 4);
    rect(heroX - 1, heroY + 1, 4, 4);
  }
}

function drawUpEnemy(x) {
  if (x == 0) {
    rect(heroX + 1, heroY - 1, 4, 4);
  }
  else {
    rect(heroX + 1, heroY - 1, 4, 4);
    rect(heroX, heroY - 1, 4, 4);
  }
}

function drawRightEnemy(x) {
  if (x == 0) {
    rect(heroX + 2, heroY + 1, 4, 4);
  }
  else {
    rect(heroX + 2, heroY + 1, 4, 4);
    rect(heroX + 2, heroY, 4, 4);
  }
}

function drawDownEnemy(x) {
  if (x == 0) {
    rect(heroX, heroY + 2, 4, 4);
  }
  else {
    rect(heroX, heroY + 2, 4, 4);
    rect(heroX + 1, heroY + 2, 4, 4);
  }
}

function clearEnemySpace() {
  rect(heroX - 1, heroY, 4, 4);
  rect(heroX - 1, heroY + 1, 4, 4);
  rect(heroX, heroY - 1, 4, 4);
  rect(heroX + 1, heroY - 1, 4, 4);
  rect(heroX + 2, heroY, 4, 4);
  rect(heroX + 2, heroY + 1, 4, 4);
  rect(heroX, heroY + 2, 4, 4);
  rect(heroX + 1, heroY + 2, 4, 4);
}

function drawDistraction() {
  for (tempX = 0; tempX < width; tempX++) {
    for (tempY = 0; tempY < height; tempY++) {
      if (floor(random(3)) == 0) rect(tempX, tempY, 4, 4);
    }
  }
}
