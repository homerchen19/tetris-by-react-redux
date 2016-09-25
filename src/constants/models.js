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
