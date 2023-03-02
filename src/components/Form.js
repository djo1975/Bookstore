import { useState } from 'react';

const Form = () => {
  const [state, setState] = useState({
    booktitle: '',
    auther: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form>
        <label htmlFor="booktitle">
          <input placeholder="Book title" name="booktitle" type="text" value={state.booktitle} onChange={handleChange} />
        </label>
        <label htmlFor="auther">
          <input placeholder="Auther" name="auther" type="text" value={state.auther} onChange={handleChange} />
        </label>
        <button type="button">Add book</button>
      </form>
    </>
  );
};

export default Form;
