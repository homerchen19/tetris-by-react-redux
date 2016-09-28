import { connect } from 'react-redux';
import Tetromino from '../components/Tetromino';

const NextTetrominoContainer = connect (
	(state) => {
		let tmp = state.get('nextTetrominoReducer');
    if(tmp.shape !== undefined) {
      return {
        shape: tmp.shape,
      	name: tmp.name,
      	color: tmp.color,
      	offsetX: tmp.offsetX,
      	offsetY: tmp.offsetY
      }
    } else {
      return {
        shape: [],
      	name: '',
      	color: '',
        offsetX: 0,
      	offsetY: 0,
      }
    }
	},
	(dispatch) => ({})
)(Tetromino);
export default NextTetrominoContainer;
