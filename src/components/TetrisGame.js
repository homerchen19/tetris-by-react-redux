import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuContainer from '../containers/MenuContainer.js';
import GameFieldContainer from '../containers/GameFieldContainer.js';
import GameInfoContainer from '../containers/GameInfoContainer.js';
import Constants from '../constants/constants.js';

injectTapEventPlugin();

const { fieldWidth, fieldHeight } = Constants;

const TetrisGame = () => (
  <div>
    <div>
      <MenuContainer />
    </div>
    <div>
      <GameFieldContainer />
      <MuiThemeProvider>
        <GameInfoContainer />
      </MuiThemeProvider>
    </div>
  </div>
);

export default TetrisGame;
