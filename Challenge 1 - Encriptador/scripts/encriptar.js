var textoEntradaEncript = document.getElementById("entry");
var textoFinalEncript = document.getElementById("texto_encriptado");
var botonEncriptar = document.getElementById("encriptar");
var contenidoAntes = document.getElementById("antes_container");
var contenidoDespues = document.getElementById("despues_container");
var botonCopiar = document.getElementById("copiar");

function borrar(){
    contenidoAntes.style.display = "none";
    contenidoDespues.style.display = "block";
    botonCopiar.style.display = "block";
}
function cambiarTextoEncript(){
    let letras = textoEntradaEncript.value;
    let textoSalidaEncript = "";
    for (x of letras) {
        if (x == "a") {
            x = "ai";
        } else if (x == "e") {
            x = "enter";
        } else if (x == "i") {
            x = "imes";
        } else if (x == "o") {
            x = "ober";
        } else if (x == "u") {
            x = "ufat";
        }
        textoSalidaEncript = textoSalidaEncript + x;
    }
    return (textoSalidaEncript);
}

function mostrarEncript() {
    let resultadoEncript = cambiarTextoEncript();
    let contenidoEncript = textoEntradaEncript.value;
    if (contenidoEncript != "") {
        borrar();
        textoFinalEncript.textContent = resultadoEncript;
    } else {
        alert("Ingrese texto");
    }
}

botonEncriptar.onclick = mostrarEncript;