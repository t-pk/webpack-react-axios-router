import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

const userSelector = (id) =>
  createSelector(
    (state) => state.get(`usersInfo`),
    (usersInfo) => {
      const user = usersInfo.find((usx) => usx.get(`id`) === id);
      if (user) {
        return user;
      }
      return fromJS({
        name: '[...]',
        fetchStatus: 'NOT_FETCHED',
        id,
      });
    },
  );

export default userSelector;
