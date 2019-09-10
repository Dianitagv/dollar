// Math => Clase que provee de funciones matemáticas sin la necesidad de crear un objeto de dicha clase.
// Estas clases son llamadas estáticas

// Raíz cuadrada
console.log(Math.sqrt(81));

// el piso de un numero
console.log("Piso de 10.2 => " + Math.floor(10.9));

// el techo de un numero
console.log("Piso de 9.1 => " + Math.ceil(9.1));

// redondear un numero
console.log("Redondeo de 4.5 =>"+Math.round(4.5));
console.log("Redondeo de 5.5 =>"+Math.round(5.5));
console.log("Redondeo de 4.6 =>"+Math.round(4.6));
console.log("Redondeo de 4.3 =>"+Math.round(4.3));

// numero random o aleatorio entreo 0 y 1 en decimales
console.log("Random entre 0 y 1 =>" + Math.random());

// numero random entre 2 numeros dados
console.log("Random entre 4 y 25 =>" + Math.round((Math.random()* (25-4)+4)));