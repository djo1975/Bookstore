const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOK = 'LOAD_BOOK';

const initialState = {
  books: [],
};

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const loadBook = (books) => ({
  type: LOAD_BOOK,
  books,
});

const bookReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOK) {
    return {
      ...state,
      books: [...state.books, action.book],
    };
  }

  if (action.type === REMOVE_BOOK) {
    return {
      ...state,
      books: state.books.filter((book) => book.item_id !== action.id),
    };
  }

  if (action.type === LOAD_BOOK) {
    const bookTemp = [];
    Object.entries(action.books).forEach(([key, value]) => {
      bookTemp.push({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
        author: value[0].author,
      });
    });
    return {
      ...state,
      books: bookTemp,
    };
  }

  return state;
};
export default bookReducer;
