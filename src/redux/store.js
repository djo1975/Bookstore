import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './booksSlice';
import categoriesSlice from './categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    categories: categoriesSlice,
    // Add other slices here if needed
  },
});

export default store;
