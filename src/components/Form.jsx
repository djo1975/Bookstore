import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { asyncCreate } from '../redux/API/bookstoreAPI';
import styles from '../Style/Book.module.css';

const Form = () => {
  const [state, setState] = useState({
    booktitle: '',
    auther: '',
    category: '',
  });

  const dispatch = useDispatch();

  const resetForm = () => {
    setState({
      booktitle: '',
      auther: '',
      category: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

    dispatch(
      asyncCreate({
        item_id: uuidv4().replaceAll('-', ''),
        title: state.booktitle,
        author: state.auther,
        category: '',
      }),
    );

    resetForm(); // pozovemo funkciju za resetovanje forme
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className={styles.Line3} />
      <h3 className={styles.Formtitle}>
        ADD NEW BOOK
      </h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <label htmlFor="booktitle">
            <input
              placeholder="Book title"
              name="booktitle"
              className={styles.formInput}
              type="text"
              value={state.booktitle}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="auther">
            <input
              className={styles.formInput2}
              placeholder="Auther"
              name="auther"
              type="text"
              value={state.auther}
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            className={styles.addBtn}
            onClick={handleSubmit}
          >
            Add book
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
