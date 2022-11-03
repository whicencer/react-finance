import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setLocalStorage } from "../../../utils/localStorage";
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
      const validatedCurrency = validateCurrency(action.payload);

      state.currentCurrency = validatedCurrency;
      setLocalStorage('currency', validatedCurrency.code);
    }
  }
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;