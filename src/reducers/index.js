import { combineReducers } from 'redux';
import { getTest } from './test';
const rootReducer = combineReducers({ test: getTest });

export default rootReducer;
