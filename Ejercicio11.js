const prompt = require('prompt-sync')({sigint: true});
let num = prompt("Ingresa un númerito: ");
c=0;
s=0;
while(c<num){
    c++;
    if(c%3==0){
        console.log(c)
        s++;
    }
}
console.log("Los multiplos de 3 de el rango de número que ingresaste son en total " + s);
