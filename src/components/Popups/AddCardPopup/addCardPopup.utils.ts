export const validateFields = (callback: any, cardName: string, balance: number, error: (errorMessage: string) => void) => {
  let currentError = '';
  if (cardName.length <= 0) {
    currentError = 'Please, enter card name';
  } else if (cardName.length >= 20) {
    currentError = 'Card name cannot exceed more than 20 characters';
  }
  
  if (balance <= 0) {
    currentError = 'Balance cannot be 0';
  } else if (balance >= 999999999) {
    currentError = 'Balance should be more than 999.999.999';
  }

  currentError ? error(currentError) : callback();
};