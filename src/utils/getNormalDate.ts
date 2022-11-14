export const getNormalDate = (date?: Date) => {
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

  if (date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    if (date.toDateString() === new Date().toDateString()) {
      return 'Today';
    }

    return `${day} ${monthsDict[month]} ${year}`;
  }
};