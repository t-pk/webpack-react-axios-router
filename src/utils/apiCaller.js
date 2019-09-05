import axios from "axios";

const instanceAPI = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

export const fetch = async (endpoint, method = "GET", params = {}, body) => {
  try {
    return instanceAPI({
      method: method,
      url: endpoint,
      data: body,
      params: params
    });
  } catch (err) {
    return err;
  }
};
