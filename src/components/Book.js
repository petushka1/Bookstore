import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.book}>
      <div>
        <h2>
          {title}
        </h2>
        <h3>
          {author}
        </h3>
      </div>
      <button type="button" onClick={handleRemoveBook}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
