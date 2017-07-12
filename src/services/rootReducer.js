import { combineReducers } from 'redux';
import books from './books/reducer';
import user from './users/reducer';

export default combineReducers({
  books,
  user
});
