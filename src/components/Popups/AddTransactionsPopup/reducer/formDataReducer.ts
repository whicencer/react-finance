import { FormDataState } from '@components/Popups/AddTransactionsPopup/AddTransactionsPopup.typings';

export enum ActionsTypes {
  CHANGE_TRANSACTION_STATUS = "CHANGE_TRANSACTION_STATUS",
  CHANGE_TRANSACTION_SUM = "CHANGE_TRANSACTION_SUM",
  CHANGE_TRANSACTION_NOTE = "CHANGE_TRANSACTION_NOTE",
  CHANGE_TRANSACTION_BALANCE_ID = "CHANGE_TRANSACTION_BALANCE_ID",
  CHANGE_TRANSACTION_CATEGORY = "CHANGE_TRANSACTION_CATEGORY",
}

interface Action {
  type: ActionsTypes;
  payload: any;
}

export function formDataReducer(state: FormDataState, action: Action): FormDataState {
  switch (action.type) {
    case ActionsTypes.CHANGE_TRANSACTION_STATUS:
      return { ...state, status: action.payload };
    case ActionsTypes.CHANGE_TRANSACTION_SUM:
      return { ...state, sum: action.payload };
    case ActionsTypes.CHANGE_TRANSACTION_NOTE:
      return { ...state, note: action.payload };
    case ActionsTypes.CHANGE_TRANSACTION_BALANCE_ID:
      return { ...state, balanceId: action.payload };
    case ActionsTypes.CHANGE_TRANSACTION_CATEGORY:
      return { ...state, category: action.payload };

    default:
      return state;
  }
}