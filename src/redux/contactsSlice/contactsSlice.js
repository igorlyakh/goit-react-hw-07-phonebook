import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      prepare: contact => {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action) => {
        state.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
