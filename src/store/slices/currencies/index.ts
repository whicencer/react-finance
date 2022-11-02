import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICurrenciesState } from "./currencies.typings";
import { validateCurrency } from "./currencies.utils";

const initialState: ICurrenciesState = {
  currentCurrency: {
    code: 'usd',
    symbol: '$'
  }
};

const currencySlice = createSlice({
  name: 'currenciesSlice',
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currentCurrency = validateCurrency(action.payload);
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;