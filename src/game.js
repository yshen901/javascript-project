import GameView from './game_view';

class Game {
  constructor(ctx, canvasEl) {
    this.gameView = new GameView(ctx, canvasEl);
  }

  handleClick(e) {
    let offset = 10;
    let pos = [e.y - offset, e.x - offset];
    this.gameView.handleClick(pos);
  }
}

export default Game;