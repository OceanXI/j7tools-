window.onload = init;

function daysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}

function formatMonth(month, text, date, hideMonth = false) {
  let className = "cal-month";
  if (hideMonth && date.getMonth() > month) {
    className += " past";
  }
  return `<div class="${className}">${text}</div>`;
}

function formatDay(month, day, date) {
  let className = "cal-day";
  if (
    date.getMonth() > month ||
    (date.getMonth() === month && date.getDate() > day)
  ) {
    className += " past";
  } else if (date.getMonth() === month