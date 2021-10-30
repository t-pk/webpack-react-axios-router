import { createSelector } from 'reselect';

const currentUserSelector = createSelector(
  (state) => state.get(`currentUser`),
  (currentUser) => currentUser,
);

export default currentUserSelector;
