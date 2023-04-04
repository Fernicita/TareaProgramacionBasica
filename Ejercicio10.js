const prompt = require('prompt-sync')({sigint: true});
let num = prompt("Ingresa un númerito: ");
if (num%2==0){
    console.log("El número es par");
}
else{
    console.log("El número es impar");
}