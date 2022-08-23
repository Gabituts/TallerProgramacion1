import Cliente from './cliente.js'

function cargarDatos(){
    let name = document.getElementById("inp_name").value;
    let surname = document.getElementById("inp_surname").value;
    let dni = document.getElementById("inp_dni").value;

    let cliente = new Cliente(name,surname,dni);
    cliente.mostrar_datos_persona();
}

document.getElementById("btn_cargar").addEventListener("click",cargarDatos);