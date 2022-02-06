/*
 * Various constants & utility functions for working with dates
 */

export const now = new Date()

/*
 * Names for days of the week
 */

const weekDays = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

/*
 * Short names for days of the week (first three characters)
 */

const weekDaysShort = weekDays.map(weekDay => weekDay.substr(0, 2))

/*
 * Month names
 */

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/*
 * Short month names (first three characters)
 */

const monthsShort = months.map(month => month.substr(0, 3))

/*
 * Full date formatting structures
 */

const dateFormat = {
  human: {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  },
  short: {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  },
}

/*
 * Format a date (optionally by formatting structure)
 * (Fixed locale)
 */

export const formatDate = (date, structure) =>
  new Date(date).toLocaleDateString(
    'en-BE',
    dateFormat[structure] || dateFormat.human,
  )

/*
 * Get time string in HH:mm format
 */

export const formatTime = time =>
  new Date(time).toLocaleTimeString('en-BE').slice(0, -3)

/*
 * Calculate hours worked (does not include breaks) in HH:mm format
 */

export const calculateWorkday = (start, end, breakMinutes) =>
  new Date(new Date(end) - new Date(start) - new Date(breakMinutes * 60000))
    .toISOString()
    .substr(11, 5)

/*
 * Convert HH:mm format to decimal format
 *
 * {@param} String
 * {@return} Number
 */

export const timeToDecimal = time => {
  time = time.split(':')
  return parseInt(time[0], 10) * 1 + parseInt(time[1], 10) / 60
}

/*
 * Merge date and time into ISO string
 *
 * {@param} data
 * {@param} time
 *
 * {@return} DateTime
 */

export const mergeDateTime = (date, time) =>
  new Date(
    `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${time}:00`,
  )

/*
 * Amount of days that have passed between 2 dates
 *
 * @param {string} firstDate - First date
 * @param {string} secondDate - Second date
 *
 */

export const diffDays = (firstDate, secondDate) =>
  (
    Math.abs(new Date(firstDate).getTime() - new Date(secondDate).getTime()) /
    (1000 * 3600 * 24)
  ).toFixed(0)
