import { connect } from 'react-redux';
import GameField from '../components/GameField';
import Constants from '../constants/constants';
import { startGame } from '../actions/index';

const GameFieldContainer = connect (
  (state) => ({
    isPlaying: state.getIn(['menuReducer', 'globalGameStatus']) === 'PLAYING',
    isPaused: state.getIn(['gameInfoReducer', 'gameStatus']) === 'PAUSED',
	  isGameOver: state.getIn(['gameInfoReducer', 'gameStatus']) === 'GAME_OVER'
  }),
  (dispatch) => ({})
)(GameField);

export default GameFieldContainer;
