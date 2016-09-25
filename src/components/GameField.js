import React from 'react';
import { Layer, Stage } from 'react-konva';
import CurrentTetrominoContainer from '../containers/CurrentTetrominoContainer.js';
import constants from '../constants/constants.js';

const { fieldWidth, fieldHeight } = constants;

let GameField = ({ isPlaying, letsStartGame }) => {

  if(isPlaying) {
    return (
      <div style={ { display: 'inline' } }>
        <div id="gameField">
          <Stage width={ fieldWidth } height={ fieldHeight }>
            <Layer>
              <CurrentTetrominoContainer />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
  return null;
}

export default GameField;
