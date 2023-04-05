let numActual = 0;
let numMaximo = 100;
let numColumnas = 10;
for (let fila = 0; fila < numMaximo/numColumnas; fila++) {
  let filaStr = "";
  
  for (let columna = 0; columna < numColumnas; columna++) {
    filaStr += numActual + "\t";
        numActual++;
    if (numActual > numMaximo) {
      break;
    }
  }
    console.log(filaStr);
}
