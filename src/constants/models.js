import Immutable from 'immutable';

export const MenuState = Immutable.fromJS({
  isPlaying: false,
});

export const GameInfoState = Immutable.fromJS({
  isPlaying: false,
  isPaused: false,
  isGameOver: false,
  points: 0,
  clearedLines: 0,
});

export const TetrominoState = Immutable.Map({
  offsetX: 0,
	offsetY: 0,
	tetrominoShape: [],
	tetrominoColor: '',
});
