import React from 'react';
import { Layer, Stage } from 'react-konva';
import constants from '../constants/constants.js';

const { fieldWidth, fieldHeight } = constants;

let GameField = ({ isPlaying }) => {

  if(isPlaying) {
    return (
      <div style={{display: 'inline'}}>
        <div id="gameField">
          <Stage width={fieldWidth} height={fieldHeight}>
            <Layer />
          </Stage>
        </div>
      </div>
    );
  }
  return null;
}

export default GameField;
