(() => {
  interface Xmen {
    nombre: string;
    poder: string;
    edad?: number;
  }

  const enviarMision = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} a la misión`);
  };
  const regresarAlCuartel = (xmen: Xmen) => {
    console.log(`Enviando a ${xmen.nombre} al cuartel`);
  };

  const wolwerine : Xmen = {
    nombre: "Logan",
    poder: "Regeneración",
  };

  enviarMision(wolwerine);
  regresarAlCuartel(wolwerine);
})();
