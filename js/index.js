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
  } else if (date.getMonth() === month && date.getDate() === day) {
    className += " today";
  }
  return `<div class="${className}">${day}</div>`;
}

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

function getContent(date) {
  var ret = [];
  for (let i = 0; i < 12; i++) {
    ret.push(formatMonth(i, MONTHS[i], date));
    const days = daysInMonth(i, date.getFullYear());
    for (let j = 0; j < days; j++) {
      ret.push(formatDay(i, j + 1, date));
    }
  }
  return ret;
}

function init() {
  const date = window.mockDate || new Date();
  const container = document.getElementById("body");
  const content = getContent(date).join("");
  container.inner