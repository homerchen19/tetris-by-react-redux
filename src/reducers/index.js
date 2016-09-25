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
  SET_TETROMINO_SHAPE: (state, { payload }) => (
    state.set('tetrominoShape', tetrominos[payload.currentRandomShape].shape)
  ),
  SET_TETROMINO_NAME: (state, { payload }) => (
    state.set('tetrominoName', payload.currentRandomShape)
  ),
  SET_TETROMINO_COLOR: (state, { payload }) => (
    state.set('tetrominoColor', tetrominos[payload.currentRandomShape].color)
  ),
  SET_OFFSET_X: (state) => (
    state.set('offsetX', blockUnit * 3)
  ),
  SET_OFFSET_Y: (state) => (
    state.set('offsetY', 0)
  )
}, TetrominoState);

const rootReducer = combineReducers({
  menuReducer,
  gameInfoReducer,
  gameFieldReducer,
});

export default rootReducer;
