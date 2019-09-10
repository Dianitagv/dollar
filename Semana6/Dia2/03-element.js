var divCuadrado = document.getElementById("cuadrado");
<<<<<<< HEAD
// GET ANCHO DE UN ELEMENTO
console.log(divCuadrado.clientWidth);
divCuadrado.style.width = "250px";
// PARA COLOCAR LOS ESTILOS
// Cuando el estilo es de una sola palabra
// Por ejemplo: width, margin,padding,border, etc.
// la asignación será [elemento].style.[el mismo atributo];
// Cuando el estilo es de una sola palabra compuesta 
// Por ejemplo: background-color, border-radius,etc
// la asignación será Camel Case
// Ejemplo: backgorundColor, borderRadius, marginTop
console.log(divCuadrado.clientHeight);

// Nos devuelve el ancho con bordes
console.log(divCuadrado.offsetWidth);

// Nos devuelve el alto con bordes
console.log(divCuadrado.offsetHeight);

// devuelve el desplazamiento segun la parte superior
console.log(divCuadrado.offsetTop);

// devuelve el desplazamiento segun la parte izquierda
console.log(divCuadrado.offsetLeft);

// devuleve la posicion con referencia a la barra de desplazamiento con respecto a top
console.log(divCuadrado.scrollTop);

// devuelve la posicion con referencia a la barra de desplazamiento con respecto a left
console.log(divCuadrado.scrollLeft);

function deslizar(){
    var miCaja = document.getElementById("miDiv");
    miCaja.scrollTop = miCaja.scrollTop +20;
    miCaja.scrollLeft = miCaja.scrollLeft +10;
}
//  llamar funcion con consola

// como asignar una funcion a un determinado evento
// que en este caso va a ser el evento "clic"
var boton = document.getElementById("botoncito");
boton.addEventListener("click",function(){
        // alert("Me has dado clic");
        divCuadrado.style.height = `${divCuadrado.clientHeight + 5}px`;
        divCuadrado.style.left = `${divCuadrado.offsetLeft+6}px`;
    });

var btnCambiarClase = document.getElementById("cambiarClase");
btnCambiarClase.addEventListener("click",function(){
    if(divCuadrado.className == "redondo"){
        divCuadrado.className = "cuadrado";
    }else
    {
        divCuadrado.className = "redondo";
    }

});

var multiclase = document.querySelector("multiclase");
//  classlist deuevle un arreglo con todas las clases que tiene nuestro elemento
var btnAgregarClase = document.getElementById("agregarClase");
btnAgregarClase.addEventListener("click",function(){
    multiclase.classList.add("margen");
});
=======

// GET ancho de un elemento
// devuelve un valor numero en pixeles
console.log(divCuadrado.clientWidth);
// SETTEANDO => el ancho
divCuadrado.style.width = "250px";
// Para colocar los estilos
// Cuando el estilo es de un sola palabra
// Por ejemplo: width, height, margin, padding, border, etc.
// la asignación será [elemento].style.[el mismo atributo];

// Cuando el estilo es de una palabra compuesta
// Por ejemplo: background-color, border-radius, margin-top, etc.
// la asigncaión será usando Camel Case
// Ejemplo: backgroundColor, borderRadius, marginTop




// GET alto de un elemento
// devuelve un valor numero en pixeles
console.log(divCuadrado.clientHeight);

>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428

