const symbols: {[key: string]: string} = {
  'usd': '$',
  'eur': '€',
  'uah': '₴'
};

export const validateCurrency = (currency: string) => {
  const currencySymbol = symbols[currency];

  if (!currencySymbol) {
    throw new Error('Error: No such currency exists');
  } else {
    return {
      code: currency,
      symbol: currencySymbol
    };
  }
};