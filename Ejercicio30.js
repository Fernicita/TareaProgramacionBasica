const prompt = require('prompt-sync')({sigint: true});
const num1 = parseFloat(prompt("Introduce el primer número: "));
const num2 = parseFloat(prompt("Introduce el segundo número: "));
console.log("Elige una operación:");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. División");
const opcion = parseInt(prompt("Introduce el número de la operación que quieres realizar: "));
let resultado;
switch (opcion) {
  case 1:
    resultado = num1 + num2;
    break;
  case 2:
    resultado = num1 - num2;
    break;
  case 3:
    resultado = num1 * num2;
    break;
  case 4:
    resultado = num1 / num2;
    break;
  default:
    console.log("Opción inválida");
}
if (resultado !== undefined) {
  console.log(`El resultado de la operación es: ${resultado}`);
}
