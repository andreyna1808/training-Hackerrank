// https://www.codewars.com/kata/57a77726bb9944d000000b06/train/javascript

function mango(quantity, price) {
  const quantityDescont = parseInt(quantity / 3);

  return quantity * price - quantityDescont * price;
}
