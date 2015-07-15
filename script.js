Boolean isReset = true;
int heroX = 31, heroY = 31;
int chooseSide = -1;

void setup() {
  size(64, 64);
  background(255);
  noSmooth();
}

void draw() {
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

void drawHero(int x, int y) {
  set(x, y, color(0));
  set(x + 1, y, color(0));
  set(x, y + 1, color(0));
  set(x + 1, y + 1, color(0));
}

void nextFrame() {
  background(255);
  drawHero(heroX, heroY);
  drawDistraction();
  drawEnemies();
}

void drawEnemies() {
  clearEnemySpace();
  chooseSide = floor(random(4));
  int choosePower = floor(random(2));
  if (chooseSide == 0) drawLeftEnemy(choosePower);
  else if (chooseSide == 1) drawUpEnemy(choosePower);
  else if (chooseSide == 2) drawRightEnemy(choosePower);
  else if (chooseSide == 3) drawDownEnemy(choosePower);
}

void drawLeftEnemy(int x) {
  if (x == 0) {
    set(heroX - 1, heroY, color(255, 0, 0));
  }
  else {
    set(heroX - 1, heroY, color(255, 0, 0));
    set(heroX - 1, heroY + 1, color(255, 0, 0));
  }
}

void drawUpEnemy(int x) {
  if (x == 0) {
    set(heroX + 1, heroY - 1, color(255, 0, 0));
  }
  else {
    set(heroX + 1, heroY - 1, color(255, 0, 0));
    set(heroX, heroY - 1, color(255, 0, 0));
  }
}

void drawRightEnemy(int x) {
  if (x == 0) {
    set(heroX + 2, heroY + 1, color(255, 0, 0));
  }
  else {
    set(heroX + 2, heroY + 1, color(255, 0, 0));
    set(heroX + 2, heroY, color(255, 0, 0));
  }
}

void drawDownEnemy(int x) {
  if (x == 0) {
    set(heroX, heroY + 2, color(255, 0, 0));
  }
  else {
    set(heroX, heroY + 2, color(255, 0, 0));
    set(heroX + 1, heroY + 2, color(255, 0, 0));
  }
}

void clearEnemySpace() {
  set(heroX - 1, heroY, color(255));
  set(heroX - 1, heroY + 1, color(255));
  set(heroX, heroY - 1, color(255));
  set(heroX + 1, heroY - 1, color(255));
  set(heroX + 2, heroY, color(255));
  set(heroX + 2, heroY + 1, color(255));
  set(heroX, heroY + 2, color(255));
  set(heroX + 1, heroY + 2, color(255));
}

void drawDistraction() {
  for (int tempX = 0; tempX < width; tempX++) {
    for (int tempY = 0; tempY < height; tempY++) {
      if (floor(random(3)) == 0) set(tempX, tempY, color(255, 0, 0));
    }
  }
}
