const readline = require('readline');

// Crear la interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pedir al usuario que introduzca una frase
rl.question("Introduce una frase: ", (frase) => {
  // Crear una etiqueta <div> con la clase "centrado" y la frase como su contenido
  const divCentrado = document.createElement("div");
  divCentrado.textContent = frase;
  divCentrado.classList.add("centrado");

  // Agregar la etiqueta <div> al cuerpo del documento
  console.log(divCentrado.outerHTML);
  
  rl.close();
});

