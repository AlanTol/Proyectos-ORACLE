const letras = document.querySelectorAll(".letra");
const valor = document.querySelectorAll(".letra-valor");
const input = document.getElementById("entrada");
const panel = document.querySelector(".ahorcado");


let palabras = ["html","programa","codigo","lenguaje","css","frontend","futuro","puto","bitcoin"];

/* Algoritmo que pone elije una palabra al azar y pone las rayas */

const sortearPalabra = (array) => {
    let elemento = array[Math.floor(Math.random() * array.length)];
    return elemento
}

let palabra = sortearPalabra(palabras);

const ponerLetras = (elemento) => {
    for (let i = 0; i < elemento.length; i++) {
        letras[i].classList.toggle("active");
    }
} 

ponerLetras(palabra);


/* Algoritmo del juego */

input.focus();

const agregarLetra = (palabra,letra) => {    
    for (i in palabra) {
        if (palabra[i] == letra) {
            valor[i].textContent = letra;
        }
    }
}

const juego = () => {
    if(palabra.includes(input.value)) {
        agregarLetra(palabra,input.value);
    }
}


nuevoJuego.onclick = juego;