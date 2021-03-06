import axios from 'axios';
import cookies from 'js-cookie';
import { message } from 'antd';
import * as types from './actionTypes';
import history from '../../history';

const API_URL = 'http://localhost:9001/api';

function errorHandler(dispatch, error, type) {
  const errorMessage = (error && error.data && error.data.error) ? error.data.error : 'Could not connect to the server';

  dispatch({ type, errorMessage });
}

export function loginUser({ email, password }) {
  return function (dispatch) {
    dispatch({ type: types.REQUEST_AUTH_USER });

    axios.post(`${API_URL}/auth/login`, { email, password })
      .then((res) => {
        message.success('Logged in successfully');
        cookies.set('token', res.data.token, { expires: 7 });
        dispatch({ type: types.AUTH_USER });
        history.push('/dashboard');
      })
      .catch(err => errorHandler(dispatch, err.response, types.AUTH_ERROR));
  };
}

export function registerUser(formData) {
  return function (dispatch) {
    dispatch({ type: types.REQUEST_REGISTER_USER });

    axios.post(`${API_URL}/auth/register`, formData)
      .then(() => {
        message.success('Registered successfully. You can now log in to your account.');
        dispatch({ type: types.REGISTER_USER });
        history.push('/login');
      })
      .catch(err => errorHandler(dispatch, err.response, types.REGISTER_ERROR));
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: types.UNAUTH_USER });
    cookies.remove('token', { path: '/' });
  };
}

export function checkAuthToken() {

}
