import { configureStore } from '@reduxjs/toolkit';
import { PhonebookSlice } from './PhonebookSlice';



export const store = configureStore({
  reducer: {
    contacts: PhonebookSlice.reducer,    
  },
  });

  


