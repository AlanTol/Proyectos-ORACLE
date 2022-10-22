const nuevaPalabra = document.getElementById("palabra-agregar");

const guardarPalabra = () => {
        pantalla2.classList.toggle("active");
        pantalla3.classList.toggle("active");
}
const agregarNuevaPalabra = () => {
        if (nuevaPalabra.value == "") {
                alert("Escriba una palabra");
        } else {
                if (!palabras.includes(nuevaPalabra.value)) {
                        palabras.push(nuevaPalabra.value);
                } else {
                        alert("esa palabra ya está");
                }
                guardarPalabra();
                nuevaPalabra.value = "";
        }
}


guardar.onclick = agregarNuevaPalabra;


const cancelarPalabra = () => {
        pantalla2.classList.toggle("active");
        pantalla1.classList.toggle("active");
}

cancelar.onclick = cancelarPalabra;
    




