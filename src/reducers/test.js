import { test } from "../constants";

export const getTest = (state = [], action) => {
  let { data } = action;

  switch (action.type) {
    case test.TEST:
      return data;
    default:
      return state;
  }
};
