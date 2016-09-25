import { createAction } from 'redux-actions';

export const playGame = createAction('PLAY_GAME');
export const pauseGame = createAction('PAUSE_GAME');
export const unpauseGame = createAction('UNPAUSE_GAME');
export const startGame = createAction('START_GAME');
