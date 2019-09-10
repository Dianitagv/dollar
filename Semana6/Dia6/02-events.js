// var bnt = document.getElementById("boton");
// //  nuestra funcion anonima al recibir como parametro "e" nos 
// // dara todos las propiedades del evento que se ha ejecutado
// bnt.onclick = function(e){
//     console.log(e);
//     // type es una propiedad de e que nos devuelve el tipo de evento del evento mouse
//     console.log(e.type);
// }

// var link = document.getElementById("hipervinculo");

// // hay elementos con comportamientos predefinidos, "preventDefault" nos permite capturar el evento y no ejecutar su comportamiento predefinido
// link.onclick = function(e){
//     e.preventDefault();
// }

var sqr = document.getElementById("cuadrado");
var circ = document.getElementById("circulo");

function clic(e) {
    console.log(e);
    // target hace referencia a una propiedad del objetivo del evento, en este caso al elemento al cual hacemos clic
    console.log(e.target);
    // 
    console.log(e.target.getAttribute("goles"));

    if (e.target.getAttribute("id") === "cuadrado") {
        console.log("Es un cuadrado brasileño");
    }
    else {
        e.target.setAttribute("goles", "4");
        console.log(e.target.getAttribute("goles"));
    }

    console.log(`X => ${e.clientX} respecto a la ventana`);
    console.log(`Y => ${e.clientY} respecto a la ventana`)

    // offsetX y offsetY nos dará la coordenadas en función al elemento
    console.log(`X => ${e.offsetX} respecto al elemento`);
    console.log(`Y => ${e.offsetY} respecto al elemento`);

    // altkey es una propiedad que nos devolverá un booleano
    if (e.altKey === true) {
        console.log("Me has hecho click presionando Alt!")
    }
    if (e.shiftKey === true) {
        console.log("Me has hecho click presionando Shift!");
    }
    if (e.ctrlKey === true) {
        console.log("Me has hecho click presionando CTRL!");
    }
    // This hará referencia al mismo objeto y en este caso será equivalente a e.target
    console.log(this);

}

cuadrado.onclick = clic;
circulo.onclick = clic;


