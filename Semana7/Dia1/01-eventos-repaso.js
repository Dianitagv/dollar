var dark = document.getElementById("liDark");
var light = document.getElementById("liLight");
var link = document.getElementById("estilos");
var boton = document.getElementById("btnCentral");
var principal = document.getElementById("principal");
// FORMA 1 DE ASIGNAR UN EVENTO
// [elemento].onclick = function anonima
light.onclick = function () {
    link.setAttribute("href", "./01-eventos-repaso-light.css");

}
dark.onclick = function () {
    link.setAttribute("href", "./01-eventos-repaso-dark.css");
}

// FORMA 2 DE ASIGNAR UN EVENTO
// [elemento].addEventListener[("evento_sin_prefijo_on"),function anonima]
boton.addEventListener("click",function(e){
    var alto = window.innerHeight;
    var ancho = window.innerWidth;

    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "15px";
    nuevoDiv.style.height = "15px";
    nuevoDiv.style.borderRadius = "50%";
    nuevoDiv.style.backgroundColor ="blue";

    var randomX = Math.random() * (ancho-0) + 0;
    var randomY = Math.random() * (alto-0) + 0;
    
    nuevoDiv.style.position ="absolute";
    nuevoDiv.style.top = randomX + "px";
    nuevoDiv.style.left = randomY + "px";
    principal.appendChild(nuevoDiv);
});