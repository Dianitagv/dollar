// document
<<<<<<< HEAD
// representa el DOM
// 1. REFERENCIAR A UN ELEMENTO DEL DOM MEDIANTE SU ID O IDENTIFICADOR

var miTitulo = document.getElementById("titulo"); /* Primera forma para capturar el elemento */
console.log(miTitulo);

// 2. REFERENCIAR A UN CONJUNTO DE ELEMENTOS DEL DOM DADO EL NOMBRE DE LA CLASE QUE COMPARTAN
var parrafos = document.getElementsByClassName("descripcion");
console.log(parrafos);

// 3.REFERENCIAR A UN CONJUNTO DE ELEMENTOS DEL DOM DADO SU NOMBRE DE ETIQUETA
var misLis = document.getElementsByTagName("li");
console.log(misLis);

// 4. REFERENCIAR A UN CONJUNTO DE ELEMENSO DEL DOM DADO UN SELECTOR COMO EN CSS
var misUls = document.querySelectorAll("section article ul");
console.log(misUls);

// 5. REFERENCIA A LA PRIMERA COINCIDENCIA DADO UN SELECTOR COMO EN CSS, OJO SOLO DEVUELVE UN ELEMENTO
var unParrafo = document.querySelector("p");
console.log(unParrafo);

=======
// representa al DOM => Document Object Model
// manipulando el dom
// 1. referenciar a un elemento del dom
// mediante su ID o identificador
var miTitulo = document.getElementById("titulo");
console.log(miTitulo);

// 2. referenciar a un conjunto de elementos del dom
// dado el nombre de la clase que compartan
var miParrafos = document.getElementsByClassName("descripcion");
console.log(miParrafos);

// 3. referenciar a un conjunto de elementos del dom
// dado el nombre de su etiqueta
var misLis = document.getElementsByTagName("li");
console.log(misLis);

// 4. referenciar a un conjunto de elementos del dom
// dado un selector como en CSS

var misUls = document.querySelectorAll("section article ul");
console.log(misUls);

// 5. referenciar a la primera coincidencia dado un selector como en CSS
// OJO> Solo devuelve un elemento, asi exista mas de uno que coincida con 
// la seleccion
var unParrafo = document.querySelector("p");
console.log(unParrafo);
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
