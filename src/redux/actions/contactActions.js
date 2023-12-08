import { createAsyncThunk } from '@reduxjs/toolkit';
import { addNewContact, deleteContact, fetchContacts } from 'utils';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contact = await fetchContacts();
      return contact;
    } catch {
      return rejectWithValue(
        'Somethings went wrong! Reload page and try again!'
      );
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const res = await deleteContact(id);
      return res;
    } catch {
      return rejectWithValue(
        'Somethings went wrong! Reload page and try again!'
      );
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contact, { rejectWithValue }) => {
    try {
      const res = await addNewContact(contact);
      return res;
    } catch {
      return rejectWithValue(
        'Somethings went wrong! Reload page and try again!'
      );
    }
  }
);
