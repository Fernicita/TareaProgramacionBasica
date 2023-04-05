const prompt = require('prompt-sync')({sigint: true});
let numerouno=parseInt(prompt("Introduce tu primer número "));
let numerodos=parseInt(prompt("Introduce tu segundo númerov(mayor o igual que el primero) "));
count=0;
suma=0;
for (let i=numerouno;i<=numerodos;i++){
    if (i%2==0){
        console.log(i);
        count++;
        suma +=i;
    }
}
console.log("En la serie hay "+ count+ " multiplos de 2 y la suma de estos multiplos es "+suma);