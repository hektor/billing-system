export const weekDays = [
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
	'sunday'
]

export const weekDaysShort = weekDays.map(weekDay => weekDay.substr(0, 2))

export const months = [
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
	'December'
]

export let monthsShort = months.map(month => month.substr(0, 3))
monthsShort[2] = 'mrt'

const dateFormat = {
	human: {
		weekday: 'long',
		day: 'numeric',
		month: 'long'
	},
	short: {
		weekday: 'short',
		day: 'numeric',
		month: 'short'
	}
}


export const formatDate = (date, type) => new Date(date).toLocaleDateString('en-BE', dateFormat[type] || dateFormat.human)
export const formatTime = time => new Date(time).toLocaleTimeString('en-BE').slice(0, -3)

export const calculateWorkday = (start, end, breakMinutes) =>
	new Date((new Date(end) - new Date(start) - new Date(breakMinutes * 60000))).toISOString().substr(11, 5)

export const timeToDecimal = time => {
	time = time.split(':')
	return parseInt(time[0], 10)*1 + parseInt(time[1], 10)/60
}
