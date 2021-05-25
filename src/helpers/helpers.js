// Time delay
export const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  })
}


// Get age by year of birth
export const getCurrentAge = (date) => {
  return (new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000) | 0;
}


// Get current date
export const getCurrnetDate = (value) => {
  const currentYear = +value.slice(0, 4);
  const currnetMonth = +value.slice(5,7) - 1;
  const currentDay = +value.slice(8)
  const date = new Date(currentYear, currnetMonth, currentDay);
  const month = date.toLocaleString('en', { month: 'long' });

  return `${month} ${currentDay}, ${currentYear}`
};