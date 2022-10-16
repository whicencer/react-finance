import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../../app/typings/ITransaction";
import { ITransactionsState } from "./transactions.typings";

const initialState: ITransactionsState = {
  transactions: []
};

const transactionsSlice = createSlice({
  name: 'transactionsSlice',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransaction>) => {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;