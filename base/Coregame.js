class Coregame {
  constructor() {
    this.colors = [];
    this.sequenceUser = [];
    this.sequenceGame = [];
    this.point =0;
    this.level = 1;
    this.isPlayerTurn = false;
  }

  /*
  Le jeu se déroule comme suit:
1. Au chargement de la page, la partie commence avec le niveau 1 et le point 0.
2. La séquence de jeu est créée. Le jeu choisit une couleur au hasard et la fait clignoter.
3. Le joueur doit reproduire la séquence en cliquant sur les boutons de couleur dans l'ordre.
4. Si le joueur réussit, le jeu ajoute une nouvelle couleur à la séquence et recommence avec la séquence complète (y compris la nouvelle couleur).
5. Si le joueur se trompe, la partie est terminée et le joueur peut choisir de recommencer à partir du niveau 1.
6. Le score du joueur est calculé en fonction du niveau atteint et du nombre de couleurs dans la séquence.
7. Les joueurs peuvent rejouer le jeu autant de fois qu'ils le souhaitent.

 */

  
  createSequence()
  {
    const randomColorIndex =  Math.floor(Math.random()*this.colors.length)
    this.sequenceGame.push(this.colors[randomColorIndex])
  }

  playSequence()
  {
    //fait appel a la methode blink de la classe Display

    for(let i=0; i<this.sequenceGame.length; i++)
    {
      setTimeout(() => this.blink(this.sequenceGame[i]), 1000*i)
    }
  }
  checkSequenceisCorrect()
  {
    for(let i=0; i<this.sequenceUser.length; i++)
    {
      if(this.sequenceUser[i] !== this.sequenceGame[i])
      {
        return false
      }
    }
    return true
  }
}
