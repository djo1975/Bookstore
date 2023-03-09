import { useDispatch } from 'react-redux';
import { asyncRemove } from '../redux/API/bookstoreAPI';

const Book = (book) => {
  const dispatch = useDispatch();
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
      <div>
        <ul>
          <li>
            {category}
          </li>
          <li>
            {title}
          </li>
          <li>
            {author}
          </li>
          <li>
            <div />
            <button
              type="button"
              onClick={() => handleRemove(id)}
            >
              <pre>Remove</pre>
            </button>
            <div />
          </li>
        </ul>
        <div>
          <div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
