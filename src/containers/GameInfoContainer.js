import { connect } from 'react-redux';
import { pauseGame, unpauseGame } from '../actions/index.js';
import GameInfo from '../components/GameInfo.js';

const GameInfoContainer = connect (
  (state, nextTetromino) => ({
    isPlaying: state.getIn(['menuReducer', 'globalGameStatus']) === 'PLAYING',
    isPaused: state.getIn(['gameInfoReducer', 'gameStatus']) === 'PAUSED',
	  isGameOver: state.getIn(['gameInfoReducer', 'gameStatus']) === 'OVER',
    points: 0,
	  clearedLines: 0,
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
