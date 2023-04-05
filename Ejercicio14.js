const prompt = require('prompt-sync')({sigint: true});
let sn=[];
for (let i=0;i<5;i++){
    let n=parseInt(prompt("Introduce un numerito: "));
    sn.push(n);
}
sn.sort(function(a,b){
    return a - b;
});
console.log("El numero menor es " + sn[0]+ " Y el mayor es "+ sn[4]);