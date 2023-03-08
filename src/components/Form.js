import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/BooksSlices';

const Form = () => {
  const [book, setBook] = useState({ booktitle: '', author: '' });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    setBook({ booktitle: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add new book</h3>
      <label htmlFor="title">
        Book Title:
        <input type="text" name="booktitle" value={book.booktitle} onChange={handleChange} />
      </label>
      <label htmlFor="author">
        Author Name:
        <input type="text" name="author" value={book.author} onChange={handleChange} />
      </label>
      <button type="submit">Add book</button>
    </form>
  );
};

export default Form;
