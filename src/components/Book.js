import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { asyncRemove } from '../redux/API/bookstoreAPI';
import 'react-circular-progressbar/dist/styles.css';
import styles from '../Style/Book.module.css';

const Book = (book) => {
  const dispatch = useDispatch();
  const percentage = 66;
  const {
    category,
    title,
    author,
    id,
  } = book;

  const handleRemove = async (id) => {
    dispatch(
      asyncRemove({
        item_id: id,
      }),
    );
  };
  return (
    <>
      <div className={styles.LessonPanel}>
        <ul className={styles.bookInfo}>
          <li className={styles.genreText}>
            {category}
          </li>
          <li className={styles.titleText}>
            {title}
          </li>
          <li className={styles.SuzanneCollins}>
            {author}
          </li>
          <li className={styles.option}>
            <button type="button">
              <pre className={styles.SuzanneCollins}>Comments</pre>
            </button>
            <div className={styles.Line} />
            <button
              type="button"
              onClick={() => handleRemove(id)}
            >
              <pre className={styles.SuzanneCollins}>Remove</pre>
            </button>
            <div className={styles.Line} />
            <button type="button">
              <pre className={styles.SuzanneCollins}>Edit</pre>
            </button>
          </li>
        </ul>
        <div className={styles.progcontainer}>
          <div className={styles.progress}>
            <CircularProgressbar
              value={percentage}
              className={styles.wrec}
            />
            <ul className={styles.progressTest}>
              <span className={styles.percent}>50%</span>
              <span className={styles.complete}>Completed</span>
            </ul>
            <div className={styles.Line2} />
            <ul className={styles.bookInfo2}>
              <li className={styles.chapter}>CURRENT CHAPTER</li>
              <li className={styles.currentChapter}>Chapter 3</li>
              <li>
                <button className={styles.updateBtn} type="button">UPDATE PROGRESS</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
