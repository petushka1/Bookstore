import styles from './Loader.module.css';

const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader} />
    <div className={styles.completed}>
      <span className={styles.digits}>65%</span>
      <span>Completed</span>
    </div>
  </div>
);

export default Loader;
