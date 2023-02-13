// Add Length

// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
  const arr = [];

  const arrStr = str.split(" ");
  arrStr?.map((data) => {
    return arr.push(`${data} ${data.length}`);
  });

  return arr;
}
