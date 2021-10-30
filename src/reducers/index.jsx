import users from './users';
import combineReducers from '../utils/combineReducers';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
