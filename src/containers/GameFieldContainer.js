import { connect } from 'react-redux';
import GameField from '../components/GameField.js';
import Constants from '../constants/constants.js';
import { startGame } from '../actions/index.js';

const GameFieldContainer = connect (
  (state) => ({
    isPlaying: state.getIn(['menuReducer', 'gameStatus']) === 'PLAYING',
  }),
  (dispatch) => ({})
)(GameField);

export default GameFieldContainer;
