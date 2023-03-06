import { createSlice } from '@reduxjs/toolkit';

// Define initial state for books
const initialBooksState = {
  books: [],
};

// Define slice for books state
const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooksState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      const newBook = { title, author };
      return {
        ...state,
        books: [...state.books, newBook],
      };
    },
    removeBook: (state, action) => {
      const { title, author } = action.payload;
      const bookToRemove = { title, author };
      const updatedBooks = state.books.filter((book) => book.title !== bookToRemove.title
      && book.author !== bookToRemove.author);
      return {
        ...state,
        books: updatedBooks,
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
