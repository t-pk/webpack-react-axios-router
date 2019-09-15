import { fetch } from "../utils/apiCaller";
import { test } from "../constants";

export const actionTest = data => {
  return  dispatch => {
          dispatch(saveFilters(data));
  };
};

export const saveFilters = data => {
  return {
    type: test.TEST,
    data
  };
};

export const actionClick = () => {
  return  fetch("http://demo8649914.mockable.io/tai")
          .then(res => {
          return res;
  });
};
