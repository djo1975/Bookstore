import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state); // log the form data for testing
    // TODO: add code to submit the form data to the server
    history.push('/books'); // redirect to the books page
  };

  return (
    <>
      <h3>Add a New Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            placeholder="Book title"
            name="title"
            type="text"
            value={state.title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="author">
          <input
            placeholder="Author"
            name="author"
            type="text"
            value={state.author}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default Form;
