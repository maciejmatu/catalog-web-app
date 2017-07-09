import { BOOK_CREATE } from './actionTypes';

export function createBook(book) {
  return {
    type: BOOK_CREATE,
    book
  };
}
