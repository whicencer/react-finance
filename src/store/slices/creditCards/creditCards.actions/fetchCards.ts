import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainApi } from '@services/mainApi';

export const fetchCards = createAsyncThunk(
  'creditCards/fetchCards',
  async () => {
    const api = new MainApi();

    const response = await api.getCards();
    if (!response.ok) {
      throw new Error(response.message);
    } 
    return response.cards;  
  }
);