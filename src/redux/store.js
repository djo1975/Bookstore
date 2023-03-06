import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/BooksSlices';
import categoriesSlice from '../categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
    // Add other slices here if needed
  },
});

export default store;