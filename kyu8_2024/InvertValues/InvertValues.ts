// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/kotlin

// Invert values

export function invert(array: number[]): number[] {
  const invertArray = array.map((item: number) => -item);
  return invertArray;
}
