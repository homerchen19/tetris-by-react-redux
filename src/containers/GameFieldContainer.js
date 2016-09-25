import { connect } from 'react-redux';
import GameField from '../components/GameField.js';

const GameFieldContainer = connect (
  (state) => ({
    isPlaying: state.getIn(['menuReducer', 'gameStatus']) === 'PLAYING',
  }),
  (dispatch) => ({})
)(GameField);

export default GameFieldContainer;
