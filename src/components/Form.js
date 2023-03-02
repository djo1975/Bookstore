import React, { useState } from 'react';

function Form({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Author:
        <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
}

export default Form;
