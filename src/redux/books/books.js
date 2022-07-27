// import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

// action types
const ADD = 'BOOK_ADDED';
const REMOVE = 'BOOK_REMOVED';

// Action creators
export const addBook = ({ title, author }) => ({
  type: ADD,
  id: uuid(),
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const getFromAction = ({ id, title, author }) => ({
  id, title, author,
});

/*
const booksSlice = createSlice({
  name: 'books',
  initialState: [
    {
      id: 1,
      title: 'book 1',
      author: 'author 1',
    },
    {
      id: 2,
      title: 'book 2',
      author: 'author 2',
    }
  ],
  reducers: {
    addBookReducer(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      })
    },
    removeBookReducer(state, action) {
      state.filter((book) => book.id !== action.payload.id);
    }
  }
});
*/

const booksReducer = (state = [
  {
    id: 1,
    title: 'book 1',
    author: 'author 1',
  },
  {
    id: 2,
    title: 'book 2',
    author: 'author 2',
  },
], action = []) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getFromAction(action),
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default booksReducer;
