<<<<<<< HEAD
// DOCUMENT
// HACE REFERENCIA AL DOM

var miTitulo= document.getElementById("titulo");

var caja = document.getElementById("cajita");

var parrafos = document.getElementsByClassName("texto");

var Titulos = document.getElementsByTagName("h2");

console.log(miTitulo);
console.log(caja);
console.log(parrafos);
console.log(Titulos);
=======
//DOCUMENT
//Me va a hacer referencia al DOM
//lo obtenemos porID
var miTitulo = document.getElementById("titulo");

var Caja = document.getElementById("cajita");

//por su nombre de clase, esto nos devolvera un arreglo con los elementos que tengan esa clase
var Parrafos = document.getElementsByClassName("texto");

//o por su etiqueta, en este caso h2
var Titulos = document.getElementsByTagName("h2");

//Adicional
//podemos acceder por un selector muy al estilo de CSS, aqui buscamos un objeto con clase texto, en estecaso el 1ero
var texto = document.querySelector(".texto");

//de igual manera que en CSS, pero aqui buscamos todos los objetos con clase texto, en un arreglo
var textos = document.querySelectorAll(".texto");

console.log(miTitulo);
console.log(Caja);
console.log(Parrafos);
console.log(Titulos);
console.log(texto);
console.log(textos);
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
