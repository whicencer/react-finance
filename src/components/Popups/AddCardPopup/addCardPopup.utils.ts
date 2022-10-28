import { toast } from "react-toastify";

export const validateFields = (callback: any, cardName: string, balance: number) => {
  let currentError = '';
  if (cardName.length <= 0) {
    currentError = 'Please, enter card name';
  } else if (cardName.length >= 20) {
    currentError = 'Card name cannot exceed more than 20 characters';
  } else if (balance <= 0) {
    currentError = 'Balance cannot be 0';
  } else if (balance >= 999999999) {
    currentError = 'Balance should be more than 999.999.999';
  }

  currentError ? toast.error(currentError) : callback();
};