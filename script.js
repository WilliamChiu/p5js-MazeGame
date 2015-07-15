var isReset = true;
var heroX = 31, heroY = 31;
var chooseSide = -1;

function setup() {
  size(64, 64);
  background(255);
  noSmooth();
}

function draw() {
  if (keyPressed && isReset) {
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
  } else if (!keyPressed) isReset = true;
}
//Up:38
//Left:37
//Down:40
//Right:39

function drawHero(var x, var y) {
  set(x, y, color(0));
  set(x + 1, y, color(0));
  set(x, y + 1, color(0));
  set(x + 1, y + 1, color(0));
}

function nextFrame() {
  background(255);
  drawHero(heroX, heroY);
  drawDistraction();
  drawEnemies();
}

function drawEnemies() {
  clearEnemySpace();
  chooseSide = floor(random(4));
  int choosePower = floor(random(2));
  if (chooseSide == 0) drawLeftEnemy(choosePower);
  else if (chooseSide == 1) drawUpEnemy(choosePower);
  else if (chooseSide == 2) drawRightEnemy(choosePower);
  else if (chooseSide == 3) drawDownEnemy(choosePower);
}

function drawLeftEnemy(var x) {
  if (x == 0) {
    set(heroX - 1, heroY, color(255, 0, 0));
  }
  else {
    set(heroX - 1, heroY, color(255, 0, 0));
    set(heroX - 1, heroY + 1, color(255, 0, 0));
  }
}

void drawUpEnemy(var x) {
  if (x == 0) {
    set(heroX + 1, heroY - 1, color(255, 0, 0));
  }
  else {
    set(heroX + 1, heroY - 1, color(255, 0, 0));
    set(heroX, heroY - 1, color(255, 0, 0));
  }
}

void drawRightEnemy(var x) {
  if (x == 0) {
    set(heroX + 2, heroY + 1, color(255, 0, 0));
  }
  else {
    set(heroX + 2, heroY + 1, color(255, 0, 0));
    set(heroX + 2, heroY, color(255, 0, 0));
  }
}

function drawDownEnemy(var x) {
  if (x == 0) {
    set(heroX, heroY + 2, color(255, 0, 0));
  }
  else {
    set(heroX, heroY + 2, color(255, 0, 0));
    set(heroX + 1, heroY + 2, color(255, 0, 0));
  }
}

function clearEnemySpace() {
  set(heroX - 1, heroY, color(255));
  set(heroX - 1, heroY + 1, color(255));
  set(heroX, heroY - 1, color(255));
  set(heroX + 1, heroY - 1, color(255));
  set(heroX + 2, heroY, color(255));
  set(heroX + 2, heroY + 1, color(255));
  set(heroX, heroY + 2, color(255));
  set(heroX + 1, heroY + 2, color(255));
}

function drawDistraction() {
  for (var tempX = 0; tempX < width; tempX++) {
    for (var tempY = 0; tempY < height; tempY++) {
      if (floor(random(3)) == 0) set(tempX, tempY, color(255, 0, 0));
    }
  }
}
