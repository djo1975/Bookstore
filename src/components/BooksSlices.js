// Define initial state for books
const initialBooksState = {
  books: [],
};

// Define action types for adding and removing books
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Define reducer for adding a book
const addBookReducer = (state, action) => {
  const { title, author } = action.payload;
  const newBook = { title, author };
  return {
    ...state,
    books: [...state.books, newBook],
  };
};

// Define reducer for removing a book
const removeBookReducer = (state, action) => {
  const { title, author } = action.payload;
  const bookToRemove = { title, author };
  const updatedBooks = state.books.filter((book) => book.title !== bookToRemove.title
   && book.author !== bookToRemove.author);
  return {
    ...state,
    books: updatedBooks,
  };
};

// Define slice for books state
const booksSlice = (state = initialBooksState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return addBookReducer(state, action);
    case REMOVE_BOOK:
      return removeBookReducer(state, action);
    default:
      return state;
  }
};

export default booksSlice;
