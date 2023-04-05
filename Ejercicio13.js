numeros=0;
sumados=0;
sumatres=0;
while(numeros<100){
    numeros++;
    //console.log(numeros);
    if(numeros%2==0||numeros%3==0){
        console.log(numeros);
    }
    if(numeros%2==0){
        sumados++;
        //console.log("Multiplo de 2: " + numeros);
    }
    if (numeros%3==0){
        sumatres++;
       // console.log("Multiplo de 3: " + numeros);
    }
}
console.log("Los números multiples de 2 son:" + sumados);
console.log("Los números multiples de 3 son:" + sumatres);
