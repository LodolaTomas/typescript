(() => {
  console.log("inicio");

  const prom1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Termino");
    }, 1000);
  });

  prom1
    .then((response) => console.log(response))
    .catch((error) => console.warn(error));

  console.log("fin");
})();
