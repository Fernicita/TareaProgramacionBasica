const prompt = require('prompt-sync')({sigint: true});
let num = prompt("Ingresa un númerito: ");
if(num>0){
    console.log("El número que ingresaste es positivo");
}
else if (numero<0){
    console.log("El número que ingresaste es negativo");
}
else{
    console.log("Tu número es cero");
}