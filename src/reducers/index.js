import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { MenuState, GameInfoState, TetrominoState, ActiveTetrominoesState } from '../constants/models.js';
import Constants from '../constants/constants.js';

const { initialGrid, tetrominoes, blockUnit } = Constants;

const menuReducer = handleActions({
  PLAY_GAME: (state) => (
    state.set('globalGameStatus', 'PLAYING')
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
    state.set('tetrominoShape', tetrominoes[payload.currentRandomShape].shape)
  ),
  SET_TETROMINO_NAME: (state, { payload }) => (
    state.set('tetrominoName', payload.currentRandomShape)
  ),
  SET_TETROMINO_COLOR: (state, { payload }) => (
    state.set('tetrominoColor', tetrominoes[payload.currentRandomShape].color)
  ),
  SET_OFFSET_X: (state) => (
    state.set('offsetX', blockUnit * 3)
  ),
  SET_OFFSET_Y: (state) => (
    state.set('offsetY', 0)
  ),
  MOVE_RIGHT: (state) => (
    state.set('offsetX', state.get('offsetX') + blockUnit)
  ),
  MOVE_LEFT: (state) => (
    state.set('offsetX', state.get('offsetX') - blockUnit)
  ),
  MOVE_DOWN: (state) => (
    state.set('offsetY', state.get('offsetY') + blockUnit)
  ),
  ROTATE_TETROMINO: (state, { payload }) => (
    state.set('tetrominoShape', payload)
  )
}, TetrominoState);

const activeTetrominoesReducer = handleActions({
  SET_INIT_ACTIVE_TETROMINOES: (state) => (
    state.set('activeTetrominoes', initialGrid)
  )
}, ActiveTetrominoesState);

const rootReducer = combineReducers({
  menuReducer,
  gameInfoReducer,
  gameFieldReducer,
  activeTetrominoesReducer
});

export default rootReducer;
