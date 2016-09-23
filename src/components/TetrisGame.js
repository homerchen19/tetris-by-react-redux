import React from 'react';
import GameField from './GameField.js';
import MenuContainer from '../containers/MenuContainer.js';

const TetrisGame = () => (
  <div>
    <div>
      <MenuContainer />
    </div>
    <GameField />
  </div>
);

export default TetrisGame;
