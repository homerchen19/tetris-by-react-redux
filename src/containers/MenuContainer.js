import { connect } from 'react-redux';
import Menu from '../components/Menu.js';
import { loadGame } from '../actions/index.js';

const MenuContainer = connect(
	(state) => ({
		isPlaying: state.get('isPlaying'),
	}),
	(dispatch) => ({
		handleSpaceBar: (e) => {
			if (e.keyCode === 32) {
        dispatch(loadGame());

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
			}
		}
	})
)(Menu);

export default MenuContainer;
