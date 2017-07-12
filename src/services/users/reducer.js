import * as types from './actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_AUTH_USER:
      return { ...state, isLoading: true };
    case types.AUTH_USER:
      return { ...state, isLoading: false, authenticated: true };
    case types.AUTH_ERROR:
      return { ...state, isLoading: false, authenticated: false };
    default:
      return state;
  }
}
