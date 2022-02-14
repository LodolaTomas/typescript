(() => {
  
    const retirarDinero = (montoRetirar:number):Promise<number>=>{
        let dineroActual=1000;
        return new Promise((resolve, reject) => {
            if(montoRetirar>dineroActual){
                reject('No hay suficiente dinero');
            }else{
                dineroActual-=montoRetirar;
                resolve(montoRetirar);
            }
        });
    }
    


    retirarDinero(500)
        .then(montoActual => console.log(`Me queda $${montoActual}`))
        .catch(error => console.warn(error));

})();
