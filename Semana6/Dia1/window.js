<<<<<<< HEAD
// windows es un objeto que se crea junto a nuestra página web
// y contiene toda la información de nuestro navegador
// este objeto es global

/*

// devuelve la ruta de la página mostrada
console.log(window.location.href);

// devuelve el alto y ancho de la página web
console.log("Alto de mi ventana " + window.outerHeight);
console.log("Ancho de mi ventana " + window.outerWidth);

// Alto y ancho pero sin scrollbar
console.log("Alto sin scrollbar " + window.innerHeight);
console.log("Ancho sin scrollbar " + window.innerWidth);

// Posición Scrollbar
console.log(window.pageXOffset);
console.log(window.pageYOffset);

var  Mensaje = window.prompt("Hola chicos");
console.log(Mensaje);

window.alert("Desea borrar su disco duro ahora!????");

var ganamos = window.confirm("Le ganamos a Chile?");
console.log(ganamos);*/

var Ventanita;

function abrirVentanita(){
    // <a target = "_self">
    // .open recibirá la URL, de ahi el target y más propiedades
    Ventanita = window.open("http://www.codigo.edu.pe","_blank","width=600,height=400");    
}

abrirVentanita();
=======
//window es un objeto que se crea junto con nuestra página web
//y contiene toda la información del navegador
//Este objeto es global!

//Me dará la dirección donde nos encontramos
console.log(window.location.href);

//Me va a dar la altura y ancho de mi ventana respectivamente

console.log("Alto de mi Ventana " + window.outerHeight);
console.log("Ancho de mi Ventana " + window.outerWidth);

//Ancho y alto pero sin scrollbar
console.log("Alto sin ScrollBar " + window.innerHeight);
console.log("Ancho sin ScrollBar " + window.innerWidth);

//Posición ScrollBar en Horizontal y Vertical
console.log("Posicion ScrollBar Eje X" + window.pageXOffset);
console.log("Posicion ScrollBar Vertical" + window.pageYOffset);

//prompt alert y confirm en realidad pertenecen al objeto
//window, al invocarlos su comportamiento es identico 
//como si los llamaramos de forma directa
// var Mensaje = window.prompt("Hola Chicos");
// console.log(Mensaje);

// window.alert("Desea borrar su disco duro!?");

// var ganamos = window.confirm("Le ganamos a Chile");
// console.log(ganamos);

var Ventanita;
//.open es una propiedad(función) de window que nos permite abrir una nueva ventana
function abrirVentana(){
    //<a target="_self">
    //.open recibira la URL, de ahi el target y más propiedades 
    Ventanita = window.open("http://www.codigo.edu.pe","_blank","width=600,height=400");
}

abrirVentana();
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428

function cerrarVentana(){
    Ventanita.close();
}

<<<<<<< HEAD
function incrementarTamano(){
    // resizeBy aceptará 2 valores en píxeles, Hor, Ver
    Ventanita.resizeBy(20,20);
}

function imprimir(){
    Ventanita.print();
}

function Detener(){
    window.stop();
}
=======
function Imprimir(){
    window.print();
}
//.stop va a detener la carga de mi página web
function Detener(){
    window.stop();
}

>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
