import { connect } from 'react-redux';
import ActiveTetrominoes from '../components/ActiveTetrominoes.js';

const ActiveTetrominoesContainer = connect (
  (state) => ({
    grid: state.getIn(['activeTetrominoesReducer', 'activeTetrominoes'])
  }),
  (dispatch) => ({

  })

)(ActiveTetrominoes);

export default ActiveTetrominoesContainer;
