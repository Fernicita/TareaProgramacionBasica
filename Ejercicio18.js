const prompt = require('prompt-sync')({sigint: true});
let frase = prompt("Introduce una frase:");
let letra = prompt("Introduce una letra para buscar:");
frase = frase.toLowerCase();
letra = letra.toLowerCase();
let contador = 0;
for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    contador++;
  }
}
console.log("La letra " + letra + " aparece " + contador + " veces en la frase.");
