class CoreGame {
  constructor(display) {
    this.colors = ["red", "green", "blue", "yellow"];
    this.display = display;
    this.sequenceGame = [];
    this.userSequence = [];
    this.level = 0;
    this.bestScore = 0;
    this.gameOver = false;
  }

  startBtn() {
    this.sequenceGame = [];
    this.userSequence = [];
    this.level = 0;
    this.gameOver = false;
    this.displayLevel();
    this.generateSequence();
  }

  generateSequence() {
    const randomColor =
      this.colors[Math.floor(Math.random() * this.colors.length)];
    this.sequenceGame.push(randomColor);
    this.displaySequence();
    setTimeout(() => {
      this.display.blink(this.sequenceGame[0]);
    }, 1000);
  }

  displaySequence() {
    this.sequenceGame.forEach((color, index) => {
      setTimeout(() => {
        this.display.blink(color);
      }, (index + 1) * 1000);
    });
  }

  clickBtn(color) {
    if (this.gameOver) {
      return;
    }

    this.display.blink(color);
    this.userSequence.push(color);
    const index = this.userSequence.length - 1;
    if (this.userSequence[index] !== this.sequenceGame[index]) {
      this.gameOver = true;
      this.display.displayMessage("GAME OVER! fin de la partie");
      return;
    }

    if (this.userSequence.length === this.sequenceGame.length) {
      this.level++;
      this.bestScore++;
      this.userSequence = [];
      this.displayLevel();
      this.generateSequence();
      this.updateBestScore();
    }
  }

  displayLevel() {
    this.display.displayMessage(`Level: ${this.level}`);
  }

  updateBestScore() {
    if (this.level > this.bestScore) {
      this.bestScore = this.level;
    }
  }
  displayBestScore() {
    this.display.displayMessage(`Best score: ${this.bestScore}`);
  }
}
