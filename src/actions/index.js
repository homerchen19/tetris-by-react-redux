import { createAction } from 'redux-actions';

export const loadGame = createAction('LOAD_GAME');
export const pauseGame = createAction('PAUSE_GAME');
export const unpauseGame = createAction('UNPAUSE_GAME');
