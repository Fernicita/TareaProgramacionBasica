numeros=0;
sumapar=0;
sumaimpar=0;
while(numeros<100){
    numeros++;
    console.log(numeros);
    if(numeros%2==0){
        sumapar+=numeros;
    }
    else{
        sumaimpar+=numeros;
    }
}
console.log("La suma de todos los pares es:" + sumapar);
console.log("La suma de todos los impares es:" + sumaimpar);