import React from 'react';
import { Layer, Stage } from 'react-konva';
import constants from '../constants/constants.js'

const { fieldWidth, fieldHeight } = constants;

let GameField = () => {

  return (
    <div id="gameField">
      <Stage width={(fieldWidth * 60) / 100} height={fieldHeight}>
        <Layer />
      </Stage>
    </div>
  );
}

export default GameField;
