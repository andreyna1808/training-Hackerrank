// Grasshopper - Terminal Game #1

// https://www.codewars.com/kata/55e8aba23d399a59500000ce/train/javascript

function Hero(name) {
  this.name = name || "Hero";
  this.experience = 0;
  this.health = 100;
  this.position = "00";
  this.damage = 5;
}
