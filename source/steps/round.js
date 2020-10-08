import { minute, hour, day, week, month, year } from './units'

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
export default [
	{
		// Start with outputting "second"s.
		formatAs: 'second'
	},
	{
		// If "now" units are available,
		// then output "now" instead of "second"s
		minTime: 0,
		formatAs: 'now'
	},
	{
		// As soon as 0.5 seconds have passed,
		// output "second"s.
		minTime: 0.5,
		formatAs: 'second'
	},
	{
		minTime: minute - 0.5,
		formatAs: 'minute'
	},
	{
		minTime: hour - 0.5 * minute,
		formatAs: 'hour'
	},
	{
		minTime: day - 0.5 * hour,
		formatAs: 'day'
	},
	{
		minTime: week - 0.5 * day,
		formatAs: 'week'
	},
	{
		minTime: 3.5 * week,
		formatAs: 'month'
	},
	{
		minTime: year - 0.5 * month,
		formatAs: 'year'
	}
]