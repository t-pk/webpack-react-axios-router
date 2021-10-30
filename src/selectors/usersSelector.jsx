import { createSelector } from 'reselect';
import userSelector from './usersInfoSelector';

export const usersSelector = createSelector(
  (state) => state.get(`users`),
  (users) => users.toJS(),
);

export default userSelector;
