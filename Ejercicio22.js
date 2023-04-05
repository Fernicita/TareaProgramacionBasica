const prompt = require('prompt-sync')({sigint: true});
let frase = prompt("Introduce una frase:");
for (let i = 0; i < 5; i++) {
  let espacio = "";
  for (let j = 0; j < 4 * i; j++) {
    espacio += " ";
  }
  console.log(espacio + frase);
}
