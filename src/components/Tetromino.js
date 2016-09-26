import React from 'react';
import { Rect, Group } from 'react-konva';
import Constants from '../constants/constants.js';

const { blockUnit } = Constants;

let getCoordinates = (tetrominoShape) => {
	const coordinates = [];
	for(let i = 0; i < tetrominoShape.length; i++) {
		for(let j = 0; j < tetrominoShape[i].length; j++) {
			if(tetrominoShape[i][j]) {
				coordinates.push({ x: j, y: i });
			}
		}
	}
	return coordinates;
}

let tetrominoGroup = (xs, ys, tetrominoColor) => {
	const arr = [];
	for(let i = 0 ; i < xs.length; i++) {
		arr.push(<Rect key={ i } width={ blockUnit } height={ blockUnit } x={ xs[i] } y={ ys[i] } fill={ tetrominoColor } stroke="black" strokeWidth={ 5 } />);
	}
	return arr;
}

const Tetromino = ({ offsetX, offsetY, tetrominoShape, tetrominoColor }) => {
	const coordinates = getCoordinates(tetrominoShape);
	const xs = coordinates.map((coord) => (coord.x * blockUnit) + offsetX);
	const ys = coordinates.map((coord) => (coord.y * blockUnit) + offsetY);
	return (
		<Group>
			{ tetrominoGroup(xs, ys, tetrominoColor) }
		</Group>
	);
};

Tetromino.propTypes = {
	offsetX: React.PropTypes.number,
	offsetY: React.PropTypes.number,
	tetrominoShape: React.PropTypes.array,
	tetrominoColor: React.PropTypes.string,
};

export default Tetromino;
