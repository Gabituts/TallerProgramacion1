export default class Cliente {



    constructor(d1,d2,d3)
    {
        this.name = d1;
        this.surname = d2;
        this.dni = d3;
    }

    mostrar_datos_persona()
    {
        console.log(
            `Nombre: ${this.name}
            Apellido: ${this.surname}
            DNI: ${this.dni}`
        )
    }
}