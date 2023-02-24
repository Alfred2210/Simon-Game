class Display {
  constructor() {
    this.red = document.querySelector('#red');
    this.green = document.querySelector('#green');
    this.blue = document.querySelector('#blue');
    this.yellow = document.querySelector('#yellow');
    this.message = document.querySelector('#message');
    this.bestScore = document.querySelector('#bestScore');
  }

  displayMessage(text) {
    this.message.textContent = text;
  }

  blink(color) {
    const button = this[color];
    button.classList.add('flash');
    setTimeout(() => {
      button.classList.remove('flash');
    }, 300);
  }
}