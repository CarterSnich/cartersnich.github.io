/**
 * Get days in array of the passed year and month.
 * @param year
 * @param month
 * @returns array of days
 */
export function getDaysArray(year: number, month: number) {
  const days = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: days }, (_, i) => i + 1);
}

/**
 * Create a calenday layout.
 * @param date
 * @returns array
 */
export function makeCalendar(date: Date): number[] {
  const year = date.getFullYear();
  const month = date.getMonth();

  const days = getDaysArray(year, month);
  const daysInMonth = days.length;
  console.log(days);

  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month, daysInMonth).getDay();

  const prefix = Array(firstDay).fill(null);
  const suffix = Array(6 - lastDay).fill(null);

  return [...prefix, ...days, ...suffix];
}

/**
 * Get months in long format.
 */
export const MONTHS_LONG = Array.from({ length: 12 }, (_, i) =>
  new Date(0, i).toLocaleString("en", { month: "long" })
);

/**
 * Get days of the week in long format.
 */
export const WEEKS_LONG = Array.from({ length: 7 }, (_, i) =>
  new Date(1970, 0, 4 + i).toLocaleString("en", { weekday: "long" })
);
