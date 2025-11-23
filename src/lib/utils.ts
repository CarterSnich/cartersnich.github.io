/**
 * Pick random item from array.
 * @param arr
 * @returns any
 */
export function randomPickFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Get ordinal number suffix of the number.
 * @param num Number
 * @returns ordinal number suffix
 */
export function getTh(num: number) {
  const strung = num.toString();
  const ones = strung[strung.length - 1];

  switch (ones) {
    case "1":
      return "st";
    case "2":
      return "nd";
    case "3":
      return "rd";

    default:
      return "th";
  }
}
