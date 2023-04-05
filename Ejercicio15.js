const prompt = require('prompt-sync')({sigint: true});
let sn=[];
for (let i=0;i<2;i++){
    let n=parseInt(prompt("Introduce un numerito: "));
    sn.push(n);
}
sn.sort(function(a,b){
    return a - b;
});
menor=(sn[0]-1);
mayor=sn[1];
contador=0;
sumita=0;
while(menor<mayor){
    menor++;
    console.log(menor);
    contador++;
    if (menor%2!=0){
        sumita+=menor;
    }
}
console.log("Se imprimieron un total de "+contador);
console.log("La suma de los números impares es "+sumita);
