import { connect } from 'react-redux';
import Menu from '../components/Menu.js';
import Constants from '../constants/constants.js';
import {
	playGame,
	setTetrominoShape,
	setTetrominoName,
	setTetrominoColor,
	setOffsetX,
	setOffsetY
} from '../actions/index.js';


let dispatchStartGame = (dispatch) => {
	let { shapesMapping } = Constants;
	let currentRandomNumber = Math.floor(Math.random() * 7);
	let nextRandomNumber = Math.floor(Math.random() * 7);
	let currentRandomShape = shapesMapping[currentRandomNumber];
	let nextRandomShape = shapesMapping[nextRandomNumber];

	dispatch([
		setTetrominoShape({ currentRandomShape }),
		setTetrominoName({ currentRandomShape }),
		setTetrominoColor({ currentRandomShape }),
		setOffsetX(),
		setOffsetY()
	]);
};

const MenuContainer = connect(
	(state) => ({
		isPlaying: state.getIn(['menuReducer', 'gameStatus']) === 'PLAYING',
	}),
	(dispatch) => ({
		handleSpaceBar: (e) => {
			if (e.keyCode === 32) {

        dispatch(playGame());

				let handleMoving = (e) => {
					switch (e.keyCode) {
						case 37:
							e.preventDefault();
							dispatch(moveTetromino('left'));
							break;
						case 39:
							e.preventDefault();
							dispatch(moveTetromino('right'));
							break;
						case 40:
							e.preventDefault();
							dispatch(moveTetromino('down'));
							break;
						default:
							break;
					}
				};

				let handleRotation = (e) => {
					switch (e.keyCode) {
						case 38:
							e.preventDefault();
							dispatch(rotateTetromino());
							break;
						default:
							break;
					}
				};

				window.addEventListener('keydown', handleMoving);
				window.addEventListener('keydown', handleRotation);

				dispatchStartGame(dispatch);
			}
		}
	})
)(Menu);

export default MenuContainer;
