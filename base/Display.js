class Display {
  constructor() 
  {
    this.game = new Coregame();

    this.topright = document.querySelector(".top-right");
    this.topLeft = document.querySelector('.top-left');
    this.bottomRight = document.querySelector('.bottom-right');
    this.bottomLeft = document.querySelector('.bottom-left');
    this.startButton = document.getElementById("start");
    this.startButton.addEventListener("click", () => this.startBtn());
  }

  //ajouter les couleurs dans le tableau colors
  setColors() 
  {
    const colorElems = document.querySelectorAll(".btn");
    for (let i = 0; i < colorElems.length; i++) {
      const color = getComputedStyle(colorElems[i]).getPropertyValue(
        "background-color"
      );
      this.game.colors.push(color);
    }
  }

  blink(color)
  {
    const colorElem = document.querySelector(`.${color}`);
    colorElem.classList.add("active");
    setTimeout(() => colorElem.classList.remove("active"), 500);
  }

  //lance le jeu et créer une nouvelle séquence de jeu
 
  startBtn() 
  {
       this.game.createSequence();
  }
  
  
  
}

const display = new Display();
