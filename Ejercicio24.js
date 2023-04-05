const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Introduce un numerito:"));
console.log(esPrimo(num));
function esPrimo(num) {
    if (num === 2) {
      return true;
    }
    if (num <= 1 || num % 2 === 0) {
      return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  