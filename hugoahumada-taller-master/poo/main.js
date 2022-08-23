import Vehiculo from "./vehiculo.js";

// FORMA 1 - envio de parametros a traves del constructor
function ejecutar() {
  let km = document.getElementById("inp_km").value;

  let vehiculo = new Vehiculo(km); //creamos la instancia de la clase
  vehiculo.mostrar_km();
}

document.getElementById("btn_mostrar").addEventListener("click", ejecutar);

// FORMA 2 -
const mostrar_marca = () => {
  let marca = document.getElementById("slt_marca").value;
  let vehiculo = new Vehiculo();
  vehiculo.marca = marca;

  // invocamos al metodo mostrar_marca()
  vehiculo.mostrar_marca();
};

document.getElementById("btn_aceptar").addEventListener("click", mostrar_marca);

/*
Funcion flecha podemos escribirla en una sola linea, sin parentesis y sin corchetes
*/
  