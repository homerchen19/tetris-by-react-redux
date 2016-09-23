import React from 'react';
import GameField from './GameField.js';
import MenuContainer from '../containers/MenuContainer.js';
import GameFieldContainer from '../containers/GameFieldContainer.js';

const TetrisGame = () => (
  <div>
    <MenuContainer />
    <GameFieldContainer />
  </div>
);

export default TetrisGame;
