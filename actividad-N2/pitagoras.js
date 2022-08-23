

export default class Pitagoras{

    ca;
    cb;
    constructor(){}

    calcularHipotenusa () {
        let resultadoH= Math.sqrt(Math.pow(this.ca,2) + Math.pow(this.cb,2))

        return resultadoH
    }


}