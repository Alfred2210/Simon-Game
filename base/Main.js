class Main {
    constructor() {
      const display = new Display();
      this.coreGame = new CoreGame(display);
  
      document.querySelector('#start').addEventListener('click', () => {
        this.coreGame.startBtn();
      });
      
      document.querySelector('#red').addEventListener('click', () => {
        this.coreGame.clickBtn('red');
      });
      
      document.querySelector('#green').addEventListener('click', () => {
        this.coreGame.clickBtn('green');
      });
      
      document.querySelector('#blue').addEventListener('click', () => {
        this.coreGame.clickBtn('blue');
      });
      
      document.querySelector('#yellow').addEventListener('click', () => {
        this.coreGame.clickBtn('yellow');
      });
    }
  }
  
  const game = new Main();
  