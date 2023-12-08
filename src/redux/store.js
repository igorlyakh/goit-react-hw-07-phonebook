import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
