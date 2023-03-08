import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = {
  books: [
    {
      item_id: uuidv4(),
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: uuidv4(),
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: uuidv4(),
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const bookReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    const newBook = {
      item_id: uuidv4(),
      title: action.book.booktitle,
      author: action.book.author,
    };
    return {
      ...state,
      books: [...state.books, newBook],
    };
  }

  if (action.type === REMOVE_BOOK) {
    return {
      ...state,
      books: state.books.filter((book) => book.item_id !== action.id),
    };
  }

  return state;
};
export default bookReducer;
