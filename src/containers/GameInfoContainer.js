import { connect } from 'react-redux';
import GameInfo from '../components/GameInfo.js';

const GameInfoContainer = connect (
  (state, nextTetromino) => ({
    isPlaying: state.getIn(['menuReducer', 'isPlaying']),
    isPaused: false,
	  isGameOver: false,
    points: 1, // gameScore.points,
	  clearedLines: 1, //  gameScore.clearedLines,
	  nextTetromino,
  }),
  (dispatch) => ({
    changePauseState: (e) => {

    },
  })
)(GameInfo);

export default GameInfoContainer;
