import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './Style/App.css';
import styles from './Style/bookStoreApp.module.css';

function App() {
  const path = window.location.pathname === '/books';
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.pageContainer}>
          <Navbar path={path} />
          {/* prosleđujemo path kao prop u Navbar */}
          <Routes>
            <Route exact path="/" element={<Navigate to="/books" />} />
            <Route path="/books" element={<Books />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
