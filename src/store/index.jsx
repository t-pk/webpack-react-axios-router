import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { DevTools } from '../components';
import rootReducer from '../reducers';
import getDefaultState from './getDefaultState';

const logger = createLogger({
  stateTransformer: (state) => state.toJS(),
});

const enhancer = compose(applyMiddleware(thunk, logger), DevTools.instrument());
const defaultState = getDefaultState();
const store = createStore(rootReducer, defaultState, enhancer);

export default store;
