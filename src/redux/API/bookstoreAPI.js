import { createAsyncThunk } from '@reduxjs/toolkit';
import { addBook, loadBook, removeBook } from '../books/BooksSlices';

const appId = 'qozJDzgFAMJHJ6RZo52F'; // Ovde unesite ID vaše aplikacije
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOK = 'LOAD_BOOK';

export const asyncCreate = createAsyncThunk(
  CREATE_BOOK,
  async (book, thunkAPI) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(book),
    });
    const data = await response.text();
    thunkAPI.dispatch(addBook(book));
    return data;
  },
);

export const asyncRemove = createAsyncThunk(
  REMOVE_BOOK,
  async (id, thunkAPI) => {
    const response = await fetch(`${url}/${id.item_id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(id),
    });
    const data = await response.text();
    thunkAPI.dispatch(removeBook(id.item_id));
    return data;
  },
);

export const asyncLoad = createAsyncThunk(
  LOAD_BOOK,
  async (_, thunkAPI) => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    thunkAPI.dispatch(loadBook(data));
    return data;
  },
);
