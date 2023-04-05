const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Introduce un numerito:"));
console.log(convertirARomano(num));
function convertirARomano(num) {
    const romanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let resultado = "";
    
    if (num < 1 || num >= 5000) {
      return "Error: el número debe ser mayor o igual que 1 y menor que 5000";
    }
    
    for (let i = 0; i < romanos.length; i++) {
      while (num >= valores[i]) {
        resultado += romanos[i];
        num -= valores[i];
      }
    }
    
    return resultado;
  }
  