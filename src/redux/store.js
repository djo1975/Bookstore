import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/BooksSlices';
import categoriesReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesReducer,
    // Add other slices here if needed
  },
});

export default store;
