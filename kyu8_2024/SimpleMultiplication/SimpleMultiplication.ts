// https://www.codewars.com/kata/583710ccaa6717322c000105/train/typescript

// Simple multiplication

export function simpleMultiplication(num: number): number {
  const simpleMultiplication = num % 2 === 0 ? num * 8 : num * 9;
  return simpleMultiplication;
}
