export const getCurrentDate = () => {
  const date = new Date();
  const monthsDict = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${monthsDict[month]} ${year}`;
};