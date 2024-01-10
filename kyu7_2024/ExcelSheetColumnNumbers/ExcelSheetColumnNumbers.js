// https://www.codewars.com/kata/55ee3ebff71e82a30000006a/train/javascript

// Excel sheet column numbers

function titleToNumber(title) {
    const alphabetLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'    
    
    let resultValue = 0
    for (let i = 0; i < title.length; i++) {
      const currentLetter = title[i]
      const letterValue = alphabetLetters.indexOf(currentLetter) + 1
      
      resultValue = resultValue * 26 + letterValue;
    }
    
    return resultValue
  }