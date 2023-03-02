import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
