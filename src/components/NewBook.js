import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const NewBook = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const readUserInput = (e) => {
    const input = e.target;
    setBook({
      ...book,
      [input.name]: input.value,
    });
  };

  const submit = (e) => {
    e.preventDeafault();
    if (book.title && book.author) {
      const book = {
        title: book.title,
        author: book.author,
      };
      dispatch(addBook(book));
    }
  };
  return (
    <>
      <main>
        <h2>Add New Book</h2>
        <form onSubmit={submit}>
          <input type="text" id="title" name="title" placeholder="add title.." />
          <input type="text" id="author" name="author" placeholder="add author.." />
          <button type="submit">ADD BOOK</button>
        </form>
      </main>
    </>
  );
};

export default NewBook;
