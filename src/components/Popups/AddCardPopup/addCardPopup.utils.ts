export const checkLength = (cardName: string, balance: number) => {
  return cardName.length < 20 || balance < 999999999;
};