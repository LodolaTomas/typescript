(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga",
  };

  const extraer = ({ nombre, poder }: any) => {
    console.log(nombre);
    console.log(poder);
  };

  const { nombre, clave, poder } = avenger;

  console.log(nombre, clave, poder);

  const avengers: string[] = ["Thor", "Steve", "Tony"];

  const [thor, capi, ironman] = avengers;
  const [, , tony] = avengers;

  console.log(tony);
  console.log(thor, capi, ironman);

  const extraerArr = ([thor, capi, ironman]: string[]) => {
    console.log(thor);
    console.log(capi);
  };


})();
