import React from 'react';
import { Rect, Group } from 'react-konva';
import Constants from '../constants/constants.js';

const { blockUnit } = Constants;

const ActiveTetrominoes = ({ grid }) => {

	const arr = [];
	grid.forEach((val, i) => {
		val.forEach((block, j) => {
			if (block !== 'grey') {
				const key = JSON.stringify({ x: i, y: j });
				arr.push(<Rect key={ key } width={ blockUnit } height={ blockUnit } x={ i * 30 } y={ j * 30 } fill={ block } stroke="black" strokeWidth={ 8 } />);
			}
		});
	});
	return <Group>{ arr }</Group>;
};

export default ActiveTetrominoes;
