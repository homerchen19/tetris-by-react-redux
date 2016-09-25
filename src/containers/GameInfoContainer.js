import { connect } from 'react-redux';
import { pauseGame, unpauseGame } from '../actions/index.js';
import GameInfo from '../components/GameInfo.js';

const GameInfoContainer = connect (
  (state, nextTetromino) => ({
    isPlaying: state.getIn(['menuReducer', 'gameStatus']) === 'PLAYING',
    isPaused: state.getIn(['gameInfoReducer', 'gameStatus']) === 'PAUSED',
	  isGameOver: state.getIn(['gameInfoReducer', 'gameStatus']) === 'OVER',
    points: 1, // gameScore.points,
	  clearedLines: 1, //  gameScore.clearedLines,
	  nextTetromino,
  }),
  (dispatch) => ({
    changePauseState: (isPaused) => () => {
      if(isPaused) {
        dispatch(unpauseGame());
      } else {
        dispatch(pauseGame());
      }
    },
  })
)(GameInfo);

export default GameInfoContainer;
