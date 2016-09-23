import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Immutable from 'immutable';
import createLogger from 'redux-logger';
import TetrisApp from '../reducers/index.js';

const initialState = Immutable.Map();

export default createStore(
  TetrisApp,
  initialState,
  applyMiddleware(ReduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
);
