window.onload = init;

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate