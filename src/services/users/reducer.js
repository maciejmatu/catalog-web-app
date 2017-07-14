import * as types from './actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  authenticated: false,
  authErrorMessage: '',
  registerErrorMessage: ''
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REQUEST_AUTH_USER:
      return {
        ...state,
        isLoading: true
      };
    case types.AUTH_USER:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        authErrorMessage: ''
      };
    case types.UNAUTH_USER:
      return {
        ...state,
        authenticated: false
      };
    case types.AUTH_ERROR:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        authErrorMessage: action.errorMessage
      };
    case types.REQUEST_REGISTER_USER:
      return {
        ...state,
        isLoading: true
      };
    case types.REGISTER_USER:
      return {
        ...state,
        isLoading: false,
        registerErrorMessage: ''
      };
    case types.REGISTER_ERROR:
      return {
        ...state,
        isLoading: false,
        registerErrorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
