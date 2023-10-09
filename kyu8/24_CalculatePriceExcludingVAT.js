// Calculate Price Excluding VAT
// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

function excludingVatPrice(price){
  if (!price && price !== 0){
    return -1
  }
  
  const percentWithVAT = 115
  const maxPercent = 100
  
  const resultRuleOfThree = price * maxPercent / percentWithVAT
  const formattedResult = Number(resultRuleOfThree.toFixed(2))
    
  return formattedResult;
}
