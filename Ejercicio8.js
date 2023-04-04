const prompt = require('prompt-sync')({sigint: true});
n=1;
while(n!=0){
    let SN= prompt("Ingresa S o N ");
    if (SN=="N"||SN=="S"){
    console.log("Muy bien si sabes seguir instrucciones ");
    n=0;
    }   
    else{
        console.log("Al parecer NO sabes seguir instrucciones ");
    }
}