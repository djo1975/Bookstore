import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './categories/Categories';
import Book from './components/Book';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/book" element={<Book title="Sample Book" author="John Doe" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
