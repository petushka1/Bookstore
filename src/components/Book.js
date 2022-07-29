/* eslint-disable camelcase */
import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import cx from 'classnames';
import { deleteBook } from '../redux/books/books';
import styles from './Book.module.css';
import Loader from './Loader';

const Book = (props) => {
  const {
    item_id, title, author, category,
  } = props;
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(deleteBook(item_id));
  };

  return (
    <div className={styles.book}>
      <div>
        <h3 className={styles.category}>
          {category}
        </h3>
        <h2 className={styles.title}>
          {title}
        </h2>
        <h3 className={styles.author}>
          {author}
        </h3>
        <ul className={cx(styles.list, styles.author)}>
          <li>Comments</li>
          <li>|</li>
          <li>Remove</li>
          <li>|</li>
          <li>Edit</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Loader />
      </div>
      <div>
        <p className={styles.current}>CURRENT CHAPTER</p>
        <p className={styles.chapter}>Intorduction</p>
        <button className={styles.bookBtn} type="button" onClick={handleRemoveBook}>Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
