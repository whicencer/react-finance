import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITransaction } from '@typings/ITransaction';
import { MainApi } from '@services/mainApi';

interface IResponse {
  ok: boolean;
  transactions?: ITransaction[];
  message?: string
}

export const fetchTransactions = createAsyncThunk(
  'creditCards/fetchTransactions',
  async () => {
    const api = new MainApi();
    const response: IResponse = await api.getTransactions();

    if (!response.ok) {
      throw new Error(response.message);
    }
    return response.transactions;
  }
);