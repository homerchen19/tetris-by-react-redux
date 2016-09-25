import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { MenuState, GameInfoState } from '../constants/models.js';

const menuReducer = handleActions({
  LOAD_GAME: (state) => (
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
}, GameInfoState)

const rootReducer = combineReducers({
  menuReducer,
  gameInfoReducer,
});

export default rootReducer;
