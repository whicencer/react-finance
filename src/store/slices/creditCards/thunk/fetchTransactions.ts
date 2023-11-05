import { createAsyncThunk } from '@reduxjs/toolkit';
import { ITransaction } from '@typings/ITransaction';
import { mainApi } from '@services/index';

interface IResponse {
  ok: boolean;
  transactions?: ITransaction[];
  message?: string
}

export const fetchTransactions = createAsyncThunk(
  'creditCards/fetchTransactions',
  async () => {
    const response: IResponse = await mainApi.getTransactions();

    if (!response.ok) {
      throw new Error(response.message);
    }
    return response.transactions;
  }
);