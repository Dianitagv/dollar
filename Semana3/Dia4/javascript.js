<<<<<<< HEAD
var cant_hijos = 6;
var pareja = "Natalie";
var ciudad = "Nueva Orleans";
var trabajo = "desarrollador";

console.log("Estarás casado con " + pareja + " tendrás " + cant_hijos + " hijos, y vivirán en " + ciudad + " y estarás trabajando de " + trabajo);

// EJERCICIO 2

var anio_actual = 2019;
var nacimiento = 1981;
var edad = anio_actual - nacimiento;

console.log("La edad del trabajador es: " + edad);

// EJERCICIO 3

var veces = 5;
var costom3 = 0.35;
var cant_m3 = 100;

var total = costom3 * cant_m3 * veces;

console.log("El pago por " + cant_m3 + " ,y " + veces + " de llenado es: " + total);

// EJERCICIO 4

var pi = 3.1416;
var radio = prompt("Ingrese el radio del cilindro: ");
var altura = prompt("Ingrese la altura del cilindro");

var volumen = pi * altura * radio ** 2;

console.log('El volumen del cilindro es: ' + volumen);

// EJERCICIO 5

var celsius = prompt("Ingrese temperatura en Grados Celsius: ");

var faren = (celsius * 1.8) + 32;

console.log("La conversión de " + celsius + " grados Celsius a Farenheit es: " + faren);

// EJERCICIO 6

var ingrediente1 = 'Arroz';
var ingrediente2 = 'Cebolla china';
var ingrediente3 = 'Kion';
var ingrediente4 = 'Sillao';
var ingrediente5 = 'Pollo';

console.log(`::::ARROZ CHAUFA::::\nLos Ingredientes para la preparación de arroz chaufa son:\n${ingrediente1}\n${ingrediente2}\n${ingrediente3}\n${ingrediente4}\n${ingrediente5}`);
console.log(`Preparación:\nGranee el ${ingrediente1}, en una sarten con aceite freir el ${ingrediente5}, \nagregar la ${ingrediente2} junto con el ${ingrediente3}. \nAñadir al arroz el ${ingrediente5} junto con la ${ingrediente2} y echar ${ingrediente4} al gusto.`);
=======
console.log("pruebita");

var nombre;
// primero el prefijo var ___________
// variable = valor;
// siempre pongan un ; al finalizas sentencias
nombre="Jorge";
nombre=7;

var PrimerNombre = "Jorge", SegundoNombre="Montesinos", ApellidoMaterno = "Aramayo",dni = 784158158158;

console.log(PrimerNombre);

var Nombre = "Lucia";
// por favor no utlicen simbolos raros ñ ´
//NUMEROS|NUMBER   TEXTO|STRING    BOOLEANOS

//NUMBER

var x=9;
var y=3.1415;
var e=10e10;

console.log(x);
console.log(y);
console.log(e);

//STRINGS - TEXTO

var string = 'Hola';
var caracter = 'A';

console.log(string);
console.log(caracter);

//VARIABLES BOOLEANAS

var lapizzavaconpina = true;
var piscoeschileno = false;

console.log(lapizzavaconpina);

//VALORES RAROS
// Valor Infinity
console.log(5/0);
// Not A number
console.log(5/"patata");

var algo;
//undefined si no damos ningún valor a nuestra variable
//OPERADORES

var n1 = 9;
var n2 = 7;

var suma = n1 + n2;
var resta = n1 - n2;
var multiplicacion = n1 * n2;
var division = n1/n2;
var residuo = n1%n2;

console.log("Operación suma " + suma);
console.log("Operación resta " + resta);
console.log("Operación Multiplicación " + multiplicacion);
console.log("Operación División" + division);
console.log("Operacion Residuo " + residuo);

//OPERADOR UNARIO

var mitexto = "Pizza con champiñones";
var pedazosdepizza = 8;
var notanumber = 5/"patata";

console.log(typeof(mitexto));
console.log(typeof(pedazosdepizza));
console.log("ejemplo " + typeof(notanumber));
//Imprimir caracteres extraños

var otrotexto = "\"Hola chicos ya \nse viene la pizza\"";

console.log(otrotexto);
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
