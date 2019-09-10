var divRojo = document.getElementById("rojo");


function Alerta()
{
    alert("Este es otro Alert!!");
}

// La forma correcta de colocar eventos en de esta forma, ya que no hay riesgo de eseguridad
divRojo.addEventListener("click",Alerta);


var divBlanco = document.getElementById("blanco");

// Hacemos referencia directamnente al evento del elemento
divBlanco.onclick = function(){
    console.error("Hola soy un error de JS.");
}

var texto = function(){
    console.log("Has hecho click al boton. Por qué? =(")
}

var texto2 = function(){
    console.log("Has hecho click al boton. Por qué? =( ..y para colmo ejecutaste otra función")
}

var btnDocumento = document.getElementById("boton");

btnDocumento.addEventListener("click",texto);
btnDocumento.addEventListener("click",texto2);

// evento utilizado para remover algun evento creado con anterioridad
btnDocumento.removeEventListener("click",texto);

// el evento se ejecuta cuando nos posicionamos en la etiqueta
var entrada = document.getElementById("input");
// entrada.addEventListener("focus",function(){
//     console.log("Me has hecho focus.");
// });


// blur ejecuta un evento al salir de la etiqueta input
// entrada.addEventListener("blur",function(){
//     console.log("Me estoy ejecutando al salir");
// })


// evento CHANGE se activará solo cuando el contenido del input cambie, mientras no haya cambios no pasa nada
entrada.addEventListener("change",function(){console.log("He cambiado");});
