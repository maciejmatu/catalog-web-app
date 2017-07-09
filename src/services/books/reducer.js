import { BOOK_CREATE } from './actionTypes';

export default function books(state = [], action) {
  switch (action.type) {
    case BOOK_CREATE:
      return [...state, action.book];
    default:
      return state;
  }
}
