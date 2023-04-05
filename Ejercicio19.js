const prompt = require('prompt-sync')({sigint: true});
function imprimirHora() {
    // Obtenemos la hora actual
    let fecha = new Date();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
  
    minutos = (minutos < 10 ? "0" : "") + minutos;
    segundos = (segundos < 10 ? "0" : "") + segundos;
  
    console.log(hora + ":" + minutos + ":" + segundos);
  }
  
  function ponerEnHora() {
    let nuevaHora = prompt("Introduce la nueva hora (formato HH:MM:SS):");
  
    if (/^\d{2}:\d{2}:\d{2}$/.test(nuevaHora)) {
      let nuevaHoraSplit = nuevaHora.split(":");
      let nuevaHoraNum = nuevaHoraSplit.map(num => parseInt(num));
      let nuevaHoraInt = Date.UTC(1970, 0, 1, nuevaHoraNum[0], nuevaHoraNum[1], nuevaHoraNum[2]);
  
      let fecha = new Date();
      fecha.setTime(nuevaHoraInt);
  
      console.log("El reloj ha sido puesto en hora:");
      imprimirHora();
    } else {
      console.log("Error: formato de hora incorrecto. Inténtalo de nuevo.");
    }
  }
  
  function iniciarReloj() {
    console.log("La hora actual es:");
    imprimirHora();
  
    let opcion = prompt("¿Quieres poner en hora el reloj? (S/N)");
  
    if (opcion.toUpperCase() === "S") {
      ponerEnHora();
    }
  
    setInterval(imprimirHora, 1000);
  }
  
  iniciarReloj();
  