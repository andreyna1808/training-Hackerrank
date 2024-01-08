// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// Convert number to reversed array of digits

function digitize(n) {
  const arrayStringValues = n.toString().split("").reverse();
  const changeToNumber = arrayStringValues.map((value) => Number(value));

  return changeToNumber;
}
