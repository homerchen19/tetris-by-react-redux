import React from 'react';
import ReactDOM from 'react-dom';
import TetrisGame from './components/TetrisGame.js';
require('./styles/style.scss');


const App = () => (
  <div>
    <TetrisGame />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
