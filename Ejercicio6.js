const prompt = require('prompt-sync')({sigint: true});
let num = parseInt(prompt("Ingresa el número: "));
for (let i=1; i<= num;i++){
    console.log(i);
}