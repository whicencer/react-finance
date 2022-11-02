import { toast } from "react-toastify";
import { getRandomEmoji } from "../../../utils/getRandomEmoji";

const symbols: {[key: string]: string} = {
  'usd': '$',
  'eur': '€',
  'uah': '₴'
};

export const validateCurrency = (currency: string) => {
  const currencySymbol = symbols[currency];

  if (!currencySymbol) {
    toast.error('Error: No such currency exists');
    return {
      code: 'usd',
      symbol: '$'
    };
  } else {
    toast.success(`${getRandomEmoji()} Currency successfully changed`);
    return {
      code: currency,
      symbol: currencySymbol
    };
  }
};