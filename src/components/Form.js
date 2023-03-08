import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/BooksSlices';

const Form = () => {
  const [book, setBook] = useState({ title: '', author: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    setBook({ title: '', author: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new book</h3>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" value={book.title} onChange={handleChange} />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" name="author" value={book.author} onChange={handleChange} />
      </label>
      <label htmlFor="category">
        Category:
        <input type="text" name="category" value={book.category} onChange={handleChange} />
      </label>
      <button type="submit">Add book</button>
    </form>
  );
};

export default Form;
