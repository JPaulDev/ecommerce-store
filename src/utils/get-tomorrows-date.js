// Used to provide a mock delivery date.
function getTomorrowsDate() {
  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

  const [, month, day] = date.toDateString().split(' ');

  return `${day} ${month}`;
}

export default getTomorrowsDate;
