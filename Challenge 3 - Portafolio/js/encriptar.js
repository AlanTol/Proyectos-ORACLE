const textoEntradaEncript = document.getElementById("entry");
const textoFinalEncript = document.getElementById("texto_encriptado");
const botonEncriptar = document.getElementById("encriptar");

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
        textoFinalEncript.value = resultadoEncript;
    }
}

botonEncriptar.onclick = mostrarEncript;