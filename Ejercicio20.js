const prompt = require('prompt-sync')({sigint: true});
let numero = parseInt(prompt("Introduce un numero:"));
function factorial(numerito){
    if (numerito===0||numerito===1){
        return 1;
    }
    else{
        return numerito*factorial(numerito-1);
    }
}
console.log("El factorial de tu numero es " + factorial(numero));