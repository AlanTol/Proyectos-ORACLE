const pantalla1 = document.querySelector(".pantalla-inicio");
const pantalla2 = document.querySelector(".crear-palabra");
const pantalla3 = document.querySelector(".juego");
const iniciarJuego = document.querySelector(".iniciar");
const agregarPalabra = document.querySelector(".agregar");
const guardar = document.querySelector(".guardar");
const cancelar = document.querySelector(".cancelar");
const nuevoJuego = document.querySelector(".nuevo-juego");
const desistir = document.querySelector(".desistir");


const darPalabra = () => {
    pantalla1.classList.toggle("active");
    pantalla2.classList.toggle("active");
}
agregarPalabra.onclick = darPalabra;

const empezar = () => {
    pantalla1.classList.toggle("active");
    pantalla3.classList.toggle("active");
}
iniciarJuego.onclick = empezar;


const desistirJuego = () => {
    pantalla3.classList.toggle("active");
    pantalla1.classList.toggle("active");
}
desistir.onclick = empezar;

