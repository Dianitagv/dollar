var principal = document.getElementById("principal");
var footer = document.getElementById("pie");
// CREAR UN ELEMENTO
// createElement("[nombre]")
var nuevoDiv = document.createElement("div");
nuevoDiv.innerHTML = "Este es un texto de prueba";

// seteando o colocando un atributo en un elemento
// [el].setAttribute("[nombre_de_atributo]","[valor_de_atributo]")
nuevoDiv.setAttribute("id","nuevoDiv");

// tambien se puede asignar atributos no validos por html
nuevoDiv.setAttribute("nombre","unaSeccion");
nuevoDiv.style.backgroundColor = "rgba(200,200,200,0.5)";

// agregando un elemento dentro de otro
// [elemento].appendiChild([elemento])
principal.appendChild(nuevoDiv);
footer.innerHTML = "<h1>Título del pie</h1>";

var miH1 = document.createElement("h1");
miH1.innerHTML = "Título del pie";
footer.appendChild(miH1);
// [elemento].prepend => inyecta un elemento hijo dentro de otro como primer elemento hijo

