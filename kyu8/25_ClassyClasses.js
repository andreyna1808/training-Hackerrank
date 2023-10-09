// Classy Classes
// https://www.codewars.com/kata/55a144eff5124e546400005a/train/javascript
// Doc example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Getter
  get info() {
    return this.resultData();
  }

  // Method
  resultData() {
    return `${this.name}s age is ${this.age}`;
  }
}