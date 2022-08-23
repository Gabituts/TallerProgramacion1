/* dentro de la clase las funciones son metodos y las variables son atributos */

// con export default permitimos que el main pueda ver nuestra clase

export default class Vehiculo {
  // clase siempre empieza con mayus culo

  // inicializo / declaro el atributo marca
  marca = "";

  constructor(
    km // METODO que se ejecuta al crear la instancia
  ) {
    this.kilometraje = km;
  }

  mostrar_km() {
    // METODO
    console.log(`
            Kilometraje = ${this.kilometraje}
        `);
    /*
        let km = 590;
        // uso de template string
        console.log(`Probando el uso de template string.
        El kilometraje es ${km} km`)
        */
  }

  mostrar_marca() {
    console.log(`
            Marca del vehiculo:${this.marca}
        `);
  }
}
  