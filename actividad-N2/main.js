import Pitagoras from "./pitagoras.js";

function resolverHipotenusa(){
    //creamos la instancia de la clase
    let pitagoras = new Pitagoras()

    //por medio de la instancia accedemos a los atributos de la misma para asignarle un valor a cada una de ellas
    pitagoras.ca= document.getElementById("catetoA").value
    pitagoras.cb= document.getElementById("catetoB").value

    //invocamos al metodo que posteriormente nos entrega o retorna una respuesta, dicha respuesta se guarda en la variable "respuesta"
    let respuesta = pitagoras.calcularHipotenusa()
    
    //asignamos el H1 con textContent y la variable respuesta
    document.getElementById("resultado").textContent= respuesta
}


document.getElementById("btn-calcular").addEventListener("click", resolverHipotenusa);
