import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TetrisGame from './components/TetrisGame.js';
import store from './store/index.js';
require('./styles/style.scss');


const App = () => (
  <Provider store={store}>
    <TetrisGame />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
