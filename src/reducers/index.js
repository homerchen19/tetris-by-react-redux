import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { MenuState, GameInfoState, TetrominoState } from '../constants/models.js';
import Constants from '../constants/constants.js';

const { tetrominos, blockUnit } = Constants;

const menuReducer = handleActions({
  PLAY_GAME: (state) => (
    state.set('gameStatus', 'PLAYING')
  )
}, MenuState);

const gameInfoReducer = handleActions({
  PAUSE_GAME: (state) => (
    state.set('gameStatus', 'PAUSED')
  ),
  UNPAUSE_GAME: (state) => (
    state.set('gameStatus', 'PLAYING')
  )
}, GameInfoState);

const gameFieldReducer = handleActions({
  START_GAME: (state, { payload }) => (
    // state.set('tetrominoShape', tetrominos[payload.currentRandomShape].shape),
    // state.set('tetrominoName', payload.currentRandomShape),
    // state.set('tetrominoColor', tetrominos[payload.currentRandomShape].color),
    // state.set('offsetX', blockUnit * 3),
    // state.set('offsetY', 0)
    {
      'tetrominoShape': tetrominos[payload.currentRandomShape].shape,
      'tetrominoName': payload.currentRandomShape,
      'tetrominoColor': tetrominos[payload.currentRandomShape].color,
      'offsetX': blockUnit * 3,
      'offsetY': 0
    }
  )
}, TetrominoState);

const rootReducer = combineReducers({
  menuReducer,
  gameInfoReducer,
  gameFieldReducer,
});

export default rootReducer;
