import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainApi } from '@services/mainApi';

export const fetchCards = createAsyncThunk(
  'creditCards/fetchCards',
  async () => {
    const api = new MainApi();
  
    const user = localStorage.getItem('user');
    const token = JSON.parse(user ?? 'null').token;
    const response = await api.getCards(token);
    if (!response.ok) {
      throw new Error(response.message);
    } 
    return response.cards;  
  }
);