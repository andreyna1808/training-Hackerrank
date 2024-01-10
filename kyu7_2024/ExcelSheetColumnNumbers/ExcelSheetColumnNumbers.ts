// There isn't one for this language, but I practiced logic the same way

// Excel sheet column numbers

function titleToNumberTs(title: string): number {
  const alphabetLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let resultValue = 0;
  for (let i = 0; i < title.length; i++) {
    const currentLetter = title[i];
    const letterValue = alphabetLetters.indexOf(currentLetter) + 1;

    resultValue = resultValue * 26 + letterValue;
  }

  return resultValue;
}