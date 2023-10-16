// Collatz Conjecture (3n+1)
// https://www.codewars.com/kata/577a6e90d48e51c55e000217/train/javascript

var hotpo = function(n){  
  let updateNumber = n
  let result = 0
  
  while (updateNumber > 1) {    
    if (updateNumber % 2 === 0){
      updateNumber = updateNumber / 2
      result += 1
    }
    else {
      updateNumber = 3 * updateNumber + 1
      result += 1
    }
    
  }
    return result
}