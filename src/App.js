import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import styles from './App.module.css';

const App = () => {
  const state = useSelector((state) => state);
  // const dispatch = useDispatch();
  return (
    <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books BookList={state.books} />} />
          <Route path="/categories" element={<Categories Categories={state.categories} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
