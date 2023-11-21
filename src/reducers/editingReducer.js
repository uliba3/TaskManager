// reducers/taskReducer.js
import { createSlice } from '@reduxjs/toolkit';

export const editingSlice = createSlice({
  name: 'isThereEditing',
  initialState: false,
  reducers: {
    setIsThereEditing: (state, action) => action.payload,
  },
});

export const { setIsThereEditing } = editingSlice.actions;

export default editingSlice.reducer;
