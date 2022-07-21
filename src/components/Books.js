import Book from './Book';
import NewBook from './NewBook';
import styles from './Books.module.css';

const BookList = [
  {
    id: 1,
    author: 'authour 1',
    title: 'title 1',
  },
  {
    id: 2,
    author: 'authour 2',
    title: 'title 2',
  },
];

const Books = () => (
  <>
    <main>
      <div className={styles.bookList}>
        {BookList.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            title={book.title}
          />
        ))}
      </div>
      <NewBook />
    </main>
  </>
);

export default Books;
