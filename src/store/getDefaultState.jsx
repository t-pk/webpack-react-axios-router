import { fromJS } from 'immutable';

const getDefaultState = () => {
  const defaultState = {
    currentUser: {},
    users: [],
  };

  return fromJS(defaultState);
};

export default getDefaultState;
