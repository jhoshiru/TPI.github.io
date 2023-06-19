

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