import { combineReducers } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

export default combineReducers({
  checkStatusReducer,
  booksReducer,
});
