function alertas_cancion(){

    alert("Hola amor");
    alert("El dia de hoy cumplimos meses")
    alert("ya vamos por los dos años")
    alert("fuaaa como pasa el tiempo")
    alert("te hice esta pagina como regalito")
    alert("espero te guste :D")
    alert("ahora dale al boton de 'iniciar'")

    document.getElementById("iniciarBtn").classList.remove("oculto");
}

function mostrarContenido() {

    // Reproduce la canción al hacer clic en "Iniciar"
    const cancion = document.getElementById("miCancion");
    cancion.play();

    // Muestra el contenido de la página
    document.getElementById("contenido").classList.remove("oculto");

    // Oculta el botón "Iniciar"
    document.getElementById("iniciarBtn").style.display = "none";
}


window.onload = alertas_cancion;


function togglefoto(element) {
    element.classList.toggle("open");
}

function toggleLetter(element) {
    element.classList.toggle("open");
}
  
/*ALERTA SEGUN FOTO SELECCIONA EN ESTE CASO LA 1 */

function alerta_foto1(){

    alert("my melody > cinammon roll")
}

function alerta_foto2(){

    alert("my melody > cinammon roll")
}
