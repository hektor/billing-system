export const weekDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

export const weekDaysShort = weekDays.map(weekDay => weekDay.substr(0, 2));

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export let monthsShort = months.map(month => month.substr(0, 3));
monthsShort[2] = "mrt";

const human = {
	weekday: 'long',
	day: 'numeric',
	month: 'long'
}

export const formatDate = date => new Date(date).toLocaleDateString('en-US', human)
