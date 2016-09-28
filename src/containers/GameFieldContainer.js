import { connect } from 'react-redux';
import GameField from '../components/GameField.js';
import Constants from '../constants/constants.js';
import { startGame } from '../actions/index.js';

const GameFieldContainer = connect (
  (state) => ({
    isPlaying: state.getIn(['menuReducer', 'globalGameStatus']) === 'PLAYING',
    isPaused: state.getIn(['gameInfoReducer', 'gameStatus']) === 'PAUSED',
	  isGameOver: state.getIn(['gameInfoReducer', 'gameStatus']) === 'GAME_OVER'
  }),
  (dispatch) => ({})
)(GameField);

export default GameFieldContainer;
