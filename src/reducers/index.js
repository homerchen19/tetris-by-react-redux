import { combineReducers } from 'redux-immutable';
import { handleActions } from 'redux-actions';
import { MenuState } from '../constants/models.js';

const menuReducer = handleActions({
  LOAD_GAME: (state) => (
    state.set('isPlaying', true)
  )
}, MenuState);

export default menuReducer;
