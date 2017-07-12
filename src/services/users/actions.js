import axios from 'axios';
import * as types from './actionTypes';

const API_URL = 'http://localhost:9001/api';

export function loginUser({ email, password }) {
  return function (dispatch) {
    dispatch({ type: types.REQUEST_AUTH_USER });

    axios.post(`${API_URL}/auth/login`, { email, password })
      .then((res) => {
        console.log('RESPONSE', res);
        dispatch({ type: types.AUTH_USER });
      })
      .catch((err) => {
        console.log('ERROR', err.response);
        dispatch({ type: types.AUTH_ERROR });
      });
  };
}
