// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript

// Convert number to reversed array of digits

export const digitize = (n: number): number[] => {
    const arrayStringValues = n.toString().split('').reverse()
    
    const changeToNumber = arrayStringValues.map((value: string) => Number(value))
    
    return changeToNumber
  };
  