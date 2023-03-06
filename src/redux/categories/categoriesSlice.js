import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setStatus: (state) => {
      state.splice(0, state.length, 'Under construction');
    },
  },
});

export const { setStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
