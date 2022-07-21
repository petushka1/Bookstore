import { PropTypes } from 'reaprop-types';
import styles from './Book.module.css';

const Book = (props) => {
  const { title, author } = props;
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
      <button type="button">Delete</button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
