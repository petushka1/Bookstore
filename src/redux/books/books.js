import uuid from 'react-uuid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ewYk4YjZVq8pYtMAfktj/books';

// action types
const ADD = 'BOOK_ADDED';
const REMOVE = 'BOOK_REMOVED';
const READ = 'BOOKS_RETRIEVED';

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

export const readBooks = (books) => ({
  type: READ,
  books,
});

const getFromAction = ({ id, title, author }) => ({
  id, title, author,
});

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
], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getFromAction(action),
      ];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);

    case READ:
      return action.books;

    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  await fetch(URL)
    .then((res) = res.json())
    .then((book) => console.log(books))
}

export default booksReducer;
