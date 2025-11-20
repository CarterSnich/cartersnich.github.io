/**
 * Pick random item from array.
 * @param arr
 * @returns any
 */
export function randomPickFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}
