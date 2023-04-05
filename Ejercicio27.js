const prompt = require('prompt-sync')({sigint: true});

const num = parseInt(prompt("Introduce un número entre 0 y 10: "));
if (num >= 0 && num <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
} else {
  console.log("El número introducido no está dentro del rango válido.");
}
