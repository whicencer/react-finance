// Makes from number 23423 to 23 423

export const formatNumber = (number: number) => {
  return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};