class Display {
  constructor() {
    this.red = document.querySelector('#red');
    this.green = document.querySelector('#green');
    this.blue = document.querySelector('#blue');
    this.yellow = document.querySelector('#yellow');
    this.score = document.querySelector('#score');
  }

  displayMessage(text) {
    this.score.textContent = text;
  }

  blink(color) {
    const button = this[color];
    button.classList.add('flash');
    setTimeout(() => {
      button.classList.remove('flash');
    }, 300);
  }
}