// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/typescript

// Return Negative

export const makeNegative = (num: number): number => {
    const convertToNegative = num <= 0 ? num : -num
    return convertToNegative
  };