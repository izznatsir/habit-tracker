import * as Dfn from "date-fns";

/**
 * @typedef GetCalendarMonthDatesArgs
 * @property {number} month Month in number, starts from 1.
 * @property {number} year  Year in number.
 */

/**
 * @param {GetCalendarMonthDatesArgs} args
 * @returns {Array<Date>}
 */
export function getCalendarMonthDates({ month, year }) {
	const dates = [];

	// Date constructor expects month index.
	const month_index = month - 1;

	const month_date = new Date(year, month_index);

	// Check the day of the week of the month's first date.
	const first_dow = Dfn.getDay(month_date);

	// Check the last date of the month.
	const last_date = Dfn.lastDayOfMonth(month_date).getDate();

	// Check the day of the week of the month's last date.
	const last_dow = Dfn.getDay(new Date(year, month_index, last_date));

	// If `first_dow` is not 0 (not sunday), prepend previous month's tail.
	if (first_dow !== 0) {
		const prev_year = month_index === 0 ? year - 1 : year;
		const prev_month_index = month_index > 0 ? month_index - 1 : 11;

		const prev_last_date = Dfn.lastDayOfMonth(
			new Date(prev_year, prev_month_index),
		).getDate();

		for (let i = prev_last_date - first_dow + 1; i <= prev_last_date; i++) {
			dates.push(new Date(prev_year, prev_month_index, i));
		}
	}

	// Insert current month's dates.
	for (let i = 1; i <= last_date; i++) {
		dates.push(new Date(year, month_index, i));
	}

	// If `last_dow` is not 6 (not saturday), append next month's head.
	if (last_dow !== 6) {
		const next_year = month_index === 11 ? year + 1 : year;
		const next_month_index = month_index < 11 ? month_index + 1 : 0;
		const next_head_length = 6 - last_dow;

		for (let i = 1; i <= next_head_length; i++) {
			dates.push(new Date(next_year, next_month_index, i));
		}
	}

	return dates;
}
