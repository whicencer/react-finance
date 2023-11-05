import { createAsyncThunk } from '@reduxjs/toolkit';
import { mainApi } from '@services/index';

export const fetchCards = createAsyncThunk(
  'creditCards/fetchCards',
  async () => {

    const response = await mainApi.getCards();
    if (!response.ok) {
      throw new Error(response.message);
    } 
    return response.cards;  
  }
);