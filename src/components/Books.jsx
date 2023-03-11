import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { asyncCreate, asyncRemove, asyncLoad } from '../redux/API/bookstoreAPI';
import styles from '../Style/Books.module.css';

const Books = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoad()); // dispatch the asyncLoad action creator
  }, [dispatch]);

  const handleAddBook = (book) => {
    dispatch(asyncCreate(book));
  };

  const handleRemoveBook = (id) => {
    dispatch(asyncRemove(id));
  };

  return (
    <>
      <div className={styles.bookContainer}>
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            category={book.category}
            title={book.title}
            author={book.author}
            handleRemoveBook={() => handleRemoveBook(book.item_id)}
          />
        ))}
      </div>
      <Form handleAddBook={handleAddBook} />
    </>
  );
};

export default Books;
