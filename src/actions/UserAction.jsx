import { fetchApi } from '../utils/apiCaller';
import FETCH_USERS_SUCCESS from '../constants/actions/UserConstants';
import makeActionCreator from '../utils/makeActionCreator';

export const fetchUsersSuccess = makeActionCreator(
  FETCH_USERS_SUCCESS,
  `users`,
);

export const actGetUser = () => {
  return async (dispatch) => {
    return fetchApi('https://jsonplaceholder.typicode.com/users', 'GET').then(
      (response) => {
        let a = [];
        let index = 0;
        setInterval(() => {
          a.push(response.data[index]);
          index++;
          dispatch(fetchUsersSuccess(a));
        }, 3000);

        return true;
      },
      (error) => {
        throw error;
      },
    );
  };
};

export const actDelLanguage = () => {
  return Promise.all([
    fetchApi('https://run.mocky.io/v3/c89baede-c9cb-4c68-b3f8-0195537a9d6c', 'GET'),
    fetchApi('https://run.mocky.io/v3/c89baede-c9cb-4c68-b3f8-0195537a9d6c', 'GET'),
  ])
    .then(() => true)
    .catch(() => {
      //console.log(err);
    });
};

export const actGetLanguage = () => {
  return fetchApi('https://run.mocky.io/v3/c89baede-c9cb-4c68-b3f8-0195537a9d6c', 'GET').then(
    () => {
      // console.log('get', response);
      return true;
    },
    (error) => {
      throw error;
    },
  );
};
