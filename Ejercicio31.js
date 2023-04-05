const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

rl.question('Ingresa un número: ', (num) => {
  num = parseInt(num);
  
  if (esPrimo(num)) {
    console.log(`${num} es un número primo`);
  } else {
    console.log(`${num} no es un número primo`);
  }
  
  const fact = factorial(num);
  console.log(`El factorial de ${num} es: ${fact}`);
  
  console.log(`Tabla de multiplicar de ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
  
  rl.close();
});
