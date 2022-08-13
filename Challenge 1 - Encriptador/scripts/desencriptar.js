var textoEntrada = document.getElementById("entry");
var textoFinal = document.getElementById("texto_encriptado");
var botonDesencriptar = document.getElementById("desencriptar");
var contenidoAntes = document.getElementById("antes_container");
var contenidoDespues = document.getElementById("despues_container");
var botonCopiar = document.getElementById("copiar");
var paso = true;

function borrar(){
    contenidoAntes.style.display = "none";
    contenidoDespues.style.display = "block";
    botonCopiar.style.display = "block";
}
function cambiarTextoDescript(){
    let char = textoEntrada.value + " ";
    let textoSalida = "";
    let aux;
    let contador = -5;
    let id;
    for (i in char) {
        let x = parseInt(i);
        if ( x == (contador+1)) {
            if (id == "e") {
                aux = "e";
                id = "";
            } else if (id == "a") {
                aux = "a";
                id = "";
            } else if (id == "o") {
                aux = "o";
                id = "";
            } else if (id == "i") {
                aux = "i";
                id = "";
            } else if (id == "u") {
                aux = "u";
                id = "";
            }
            textoSalida = textoSalida + aux;
            contador = -5;
            paso = true;
        }

        if ((char[x]+char[x+1]+char[x+2]+char[x+3]+char[x+4])=="enter") {
            aux = "";
            contador = x + 4;
            paso = false;
            id = "e";
        } else if ((char[x]+char[x+1])=="ai") {
            aux = "";
            contador = x + 1;
            paso = false;
            id = "a";
        } else if ((char[x]+char[x+1]+char[x+2]+char[x+3])=="ober") {
            aux = "";
            contador = x + 3;
            paso = false;
            id = "o";
        } else if ((char[x]+char[x+1]+char[x+2]+char[x+3])=="imes") {
            aux = "";
            contador = x + 3;
            paso = false;
            id = "i";
        } else if ((char[x]+char[x+1]+char[x+2]+char[x+3])=="ufat") {
            aux = "";
            contador = x + 3;
            paso = false;
            id = "u";
        }

        if (paso) {
            textoSalida = textoSalida + char[i];    
        } else {
            aux = aux + char[i];
        }
    }
    return (textoSalida);
}

function mostrar() {
    let resultado = cambiarTextoDescript();
    let contenido = textoEntrada.value;
    if (contenido != "") {
        borrar();
        textoFinal.textContent = resultado;
    } else {
        alert("Ingrese texto");
    }
}

botonDesencriptar.onclick = mostrar;