(() => {
  class Avenger {
    /* 
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear?:boolean;
    peleasGanadas?:number;
    */
    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal: string,
      public puedePelear: boolean,
      public peleasGanadas: number
    ) {
      console.log("Se ejecuto el constructor");
    }
  }

  const antman = new Avenger("antman", "cap", "Scott Lang", true, 10);

  console.log(antman);
})();
