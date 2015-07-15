isReset = true;
heroX = 31, heroY = 31;
chooseSide = -1;

function setup() {
  createCanvas(512, 512);
  background(255);
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
    nextFrame();
  } else if (!keyIsPressed) isReset = true;
}
//Up:38
//Left:37
//Down:40
//Right:39

function drawHero(x, y) {
  rect(16*(x),16*(y), 16, 16);
  rect(16*(x + 1), 16*(y), 16, 16);
  rect(16*(x), 16*(y + 1), 16, 16);
  rect(16*(x + 1), 16*(y + 1), 16, 16);
}

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
