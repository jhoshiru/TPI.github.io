
// /*obtener datos */
// function obtenerDatosFormulario() {
//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const correo = document.getElementById("correo").value;
//     const entradas = document.getElementById("entradas").value; //tipo number especificado en html
//     const categoria = document.getElementById("categoria").value; //selecion de categoria: Estudiante, trainee y junior
// }
  
// const formulario = document.getElementById('formulario');
// formulario.addEventListener('submit', resumen())

//     // Crear objeto con los datos obtenidos
// const datos = {
//     nombre: nombre,
//     apellido: apellido,
//     correo: correo,
//     entradas: entradas,
//     categoria: categoria
// };
// const datosB = {
//     nombre,
//     apellido,
//     correo,
//     entradas,
//     categoria
// };
// console.log(datos)

// function resumen() {
//     const entradasTotales= datos.entradas
//     let descuento = 0;
//     switch (datos.categoria) {
//         case "Estudiante":
//           descuento = 0.2; // 20% de descuento para estudiantes
//           break;
//         case "Trainee":
//           descuento = 0.1; // 10% de descuento para trainees
//           break;
//         case "Junior":
//           descuento = 0.05; // 5% de descuento para juniors
//           break;
//     }
//     const precio=parseInt(document.getElementById("precio").value);
//     const total= entradasTotales * precio;
//     const descuentoTotal = total * descuento
//     document.getElementById("resultado").innerHTML = descuentoTotal;
// }

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", datosFormulario)

function datosFormulario(i){
    i.preventDefault();
    const precio = 200
    const entradas = parseInt(document.getElementById("entradas").value);
    const total = entradas * precio
    
    const categoria = document.getElementById("categoria").value;
    let descuento= 0;

    switch (categoria) {
        case "Estudiante":
            descuento = 0.8;
            break;
        case "Trainee":
            descuento = 0.5;
            break;
        case "Junior":
            descuento = 0.15;
            break 
        default:
            break;
    }
    
    const descuentoFinal = total * descuento;
    const descuentoFinal2 =total - descuentoFinal
    console.log(descuentoFinal2)

    document.getElementById("resultado").innerHTML = descuentoFinal2

}
const borrarDatos = document.getElementById("Borrar");

borrarDatos.addEventListener("click",borrar)

function borrar() {
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("entradas").value = "";
    document.getElementById("categoria").value = "Estudiante";
}