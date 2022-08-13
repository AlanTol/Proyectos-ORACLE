var input = document.getElementById("campoCopiar");
var botonCopiar = document.getElementById("copiar");

function copiarAlPortapapeles() {
    input.select();
    document.execCommand("copy");
}

botonCopiar.onclick = copiarAlPortapapeles;