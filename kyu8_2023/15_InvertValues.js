// Invert values

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  const newArray = [];

  array.map((number) => {
    if (Math.sign(number) === -1) {
      return newArray.push(Math.abs(number));
    } else {
      return newArray.push(number * -1);
    }
  });

  return newArray;
}
