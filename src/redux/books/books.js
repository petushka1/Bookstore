const ADD = 'BOOK_ADDED';
const REMOVE = 'BOOK_REMOVED';

const getFromAction = ({ id, title, author }) => ({
  id, title, author,
});

const booksReducer = (state = [], action = []) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        getFromAction(action),
      ];
    case REMOVE:
      return state.filter((book) => book.is !== action.id);

    default:
      return state;
  }
};

export const addBook = (title, author) => ({
  type: ADD,
  title,
  author,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default booksReducer;
