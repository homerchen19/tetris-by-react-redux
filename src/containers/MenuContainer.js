import { connect } from 'react-redux';
import Menu from '../components/Menu.js';
import Constants from '../constants/constants.js';
import { rotateArray, checkCollisions, getCompletedLines } from '../lib/index.js';
import {
	playGame,
	setInitActiveTetrominoes,
	setTetrominoShape,
	setTetrominoName,
	setTetrominoColor,
	setOffsetX,
	setOffsetY,
	rotateRight,
	moveDown,
	moveLeft,
	moveRight
} from '../actions/index.js';

let dropTetromino = (dispatch, startTime, getState) => {
	const state = getState();
	let 	currentTime = Date.now(),
				gameStatus = state.getIn(['gameInfoReducer', 'gameStatus']);

	if (currentTime - startTime >= 500 && gameStatus !== 'PAUSED' && gameStatus !== 'GAME_OVER') {
		startTime = currentTime;
		dispatch(moveTetromino('down'));
	}
	requestAnimationFrame((dropTetromino.bind(this, dispatch, startTime, getState)));
}

let getCurrentTetrominos = (getState) => {
	const state = getState();

	return {
		tetrominoShape: state.getIn(['gameFieldReducer', 'tetrominoShape']),
		tetrominoName: state.getIn(['gameFieldReducer', 'tetrominoName']),
		tetrominoColor: state.getIn(['gameFieldReducer', 'tetrominoColor']),
		offsetX: state.getIn(['gameFieldReducer', 'offsetX']),
		offsetY: state.getIn(['gameFieldReducer', 'offsetY'])
	}
};

let rotateTetromino = () => (
	(dispatch, getState) => {
		const state = getState();
		let		gameStatus = state.getIn(['gameInfoReducer', 'gameStatus']),
					activeTetrominoes = state.getIn(['activeTetrominoesReducer', 'activeTetrominoes']),
					currentTetromino = getCurrentTetrominos(getState),
					rotatedTetromino = Object.assign({}, currentTetromino);

		rotatedTetromino.tetrominoShape = rotateArray(rotatedTetromino);

		if (!checkCollisions('rotation', activeTetrominoes, rotatedTetromino) && gameStatus === 'PLAYING') {
			dispatch(rotateRight(rotatedTetromino.tetrominoShape));
		}
	}
);

let moveTetromino = (direction) => (
	(dispatch, getState) => {
		const state = getState();
		let		gameStatus = state.getIn(['gameInfoReducer', 'gameStatus']),
					activeTetrominoes = state.getIn(['activeTetrominoesReducer', 'activeTetrominoes']),
					currentTetromino = getCurrentTetrominos(getState),
					collisionCheck = checkCollisions(direction, activeTetrominoes, currentTetromino);

		if(gameStatus === 'PAUSED' || gameStatus === 'GAME_OVER') {
			return;
		}

		switch(direction) {
			case 'left':
				if(collisionCheck === false) {
					dispatch(moveLeft());
				}
				return;
			case 'right':
				if(collisionCheck === false) {
					dispatch(moveRight());
				}
				return;
			case 'down':
				if(collisionCheck === false) {
					dispatch(moveDown());
				} else if(collisionCheck === GAME_OVER) {
					dispatch(gameOver());
				} else {
					const clearedLines = getCompletedLines(activeTetrominoes, currentTetromino).length;
					dispatch(addScore(clearedLines));
					dispatch(addTetromino({ currentTetromino, nextTetromino }));
				}
				return;
			default:
				return;
		}
	}
);

let startGame = () => (
	(dispatch, getState) => {

		const { shapesMapping } = Constants;
		let currentRandomNumber = Math.floor(Math.random() * 7),
		 		nextRandomNumber = Math.floor(Math.random() * 7),
				currentRandomShape = shapesMapping[currentRandomNumber],
				nextRandomShape = shapesMapping[nextRandomNumber];

		dispatch([
			setTetrominoShape({ currentRandomShape }),
			setTetrominoName({ currentRandomShape }),
			setTetrominoColor({ currentRandomShape }),
			setOffsetX(),
			setOffsetY()
		]);

		dropTetromino(dispatch, Date.now(), getState); // Let Tetromino drop
	}
);

const MenuContainer = connect(
	(state) => ({
		isPlaying: state.getIn(['menuReducer', 'globalGameStatus']) === 'PLAYING',
	}),
	(dispatch) => ({
		handleSpaceBar: (e) => {
			if(e.keyCode === 32) {
        dispatch([playGame(), setInitActiveTetrominoes()]);
				dispatch(startGame());

				let handleMoving = (e) => {
					switch(e.keyCode) {
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
					switch(e.keyCode) {
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
			}
		}
	})
)(Menu);

export default MenuContainer;
