import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino.js';

const CurrentTetrominoContainer = connect (
  (state) => ({
    tetrominoShape: state.getIn(['gameFieldReducer', 'tetrominoShape']),
  	tetrominoName: state.getIn(['gameFieldReducer', 'tetrominoName']),
  	tetrominoColor: state.getIn(['gameFieldReducer', 'tetrominoColor']),
  	offsetX: state.getIn(['gameFieldReducer', 'offsetX']),
  	offsetY: state.getIn(['gameFieldReducer', 'offsetY'])
  }),
  (dispatch) => ({

  })
)(Tetromino);

export default CurrentTetrominoContainer;
