import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  </div>
);

export default App;
