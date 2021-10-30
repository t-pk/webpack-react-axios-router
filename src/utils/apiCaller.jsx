import axios from 'axios';
import { Modal, message } from 'antd';
import * as urlAPI from '../constants/urlAPI';
import { LOGIN_URL, TOKEN_KEY } from '../constants';
import history from './history';

const instanceNext = axios.create({
  baseURL: urlAPI.API_URL,
});

/**
 * @description: config header Authorization each send request
 */
instanceNext.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    throw error;
  },
);

/**
 * @author:
 * @description: handle response interceptor
 */
let isShowModalExpried = false;
instanceNext.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // token expiry
    if (
      error.response &&
      // error.response.status === 401 &&
      !isShowModalExpried
    ) {
      isShowModalExpried = true;
      Modal.warning({
        title: 'Token has expired.',
        content: 'Please login again!',
        onOk: () => {
          // redirect to login page
          history.push('/login');
          window.location.reload();
          // clear token
          // clearAuthStorage();

          // dispatch action LOGOUT
          // store.dispatch({ type: auth.LOGOUT });
        },
        className: 'modal-expired-token',
      });
      return;
    } else {
      message.error({
        duration: 1,
        content: JSON.stringify(error),
        className: 'custom-class',
        style: {
          marginLeft: '30%',
          float: 'right',
        },
      });
    }

    // call api without token
    if (error.response && error.response.status === 403) {
      window.location.href =
        process.env.REACT_APP_REDIRECT_AUTH_URL || LOGIN_URL;
    }

    if (error.response) return Promise.reject(error.response);
    if (error.request) return Promise.reject(error.request);

    return Promise.reject(error.message);
  },
);

/**
 * @param {string} url - Endpoint: /users - /cars - /books
 * @param {string} method - GET - POST - PUT - PATCH -DELETE
 * @param {any} data - Body: Usually used with the [POST] method, format Json.
 * @param {Object} params - Commonly used to query via url. /users?name=electronjs&age=12...
 * @param {any} cancelToken - Specifies a cancel token that can be used to cancel the request.
 */

// prettier-ignore
export const fetchApi = async (url, method = 'GET', data, params = {}, cancelToken = null) => {
  return instanceNext({ method, url, data, params, cancelToken });
};

export const fetchAllApi = async (requests = []) => {
  return axios.all(requests);
};
