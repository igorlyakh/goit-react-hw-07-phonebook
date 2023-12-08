import { createSlice } from '@reduxjs/toolkit';
import {
  createContact,
  getContacts,
  removeContact,
} from 'redux/actions/contactActions';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getContacts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(removeContact.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(removeContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    });
    builder.addCase(removeContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(createContact.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
    });
    builder.addCase(createContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addContact } = contactsSlice.actions;

export const contactReducer = contactsSlice.reducer;
