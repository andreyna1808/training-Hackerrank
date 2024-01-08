// Crash Override
// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

function aliasGen(name, lastName) {
  const existName = (value) =>
    value
      .split("")
      .shift()
      .replace(/[^A-z]/g, "")
      .toUpperCase();

  const isName = existName(name);
  const isSurName = existName(lastName);

  if (!isName.length > 0 || !isSurName.length > 0) {
    return "Your name must start with a letter from A - Z.";
  }

  return `${firstName[isName]} ${surname[isSurName]}`;
}
