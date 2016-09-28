import React from 'react';
import { Layer, Stage } from 'react-konva';
import CurrentTetrominoContainer from '../containers/CurrentTetrominoContainer.js';
import ActiveTetrominoesContainer from '../containers/ActiveTetrominoesContainer.js';
import constants from '../constants/constants.js';
import Banner from './Banner.js';

const { fieldWidth, fieldHeight } = constants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {

  if(isPlaying) {
    return (
      <div style={ { display: 'inline' } }>
        <div id="gameField">
          <Stage width={ fieldWidth } height={ fieldHeight }>
            <Layer>
              <CurrentTetrominoContainer />
              <ActiveTetrominoesContainer />
            </Layer>
          </Stage>
          { isPaused ? <Banner label="PAUSED" color="white" /> : null}
          { isGameOver ? <Banner label="GAME OVER" color="red" /> : null}
        </div>
      </div>
    );
  }
  return null;
}

export default GameField;
