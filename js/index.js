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

function format