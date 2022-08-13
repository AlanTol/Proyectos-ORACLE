var botonCopiar = document.getElementById("copiar");
var textoCopiar = document.getElementById("texto_encriptado");
function copiarAlPortapapeles(){
    let input = document.createElement("input");
    input.setAttribute("value",textoCopiar.innerText);
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input)
}
botonCopiar.onclick = copiarAlPortapapeles;