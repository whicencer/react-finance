import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTransactionsFromDB } from '../../../../services/transactionsService';

export const fetchTransactions = createAsyncThunk(
  'creditCards/fetchTransactions',
  async () => {
    return getTransactionsFromDB();
  }
);