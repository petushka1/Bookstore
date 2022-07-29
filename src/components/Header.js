import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.heading}>Bookstore CMS</h1>
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link to="/" className={styles.navItem}>BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className={styles.navItem}>CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </header>

);

export default Header;
