const prompt = require('prompt-sync')({sigint: true});
let t= prompt("Ingresa el texto del cual tengo que contar las palabras: ");
let p= t.split(" ");
let c=p.length;
console.log("La cantidad de palabras que ingresaste es: " + c);