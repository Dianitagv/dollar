var palabra = "Pizza";

console.log(palabra[1]);
console.log(`La longitud de ${palabra} es ${palabra.length}`);

for (i = 0; i < palabra.length; i++) {
    console.log(`${palabra[i]}\n`);
}

var grupoA = ['Bolivia', 'Brasil', 'Perú', 'Venezuela', 'Chile'];
var goles = [1, 3, 3, 0, -4];
var estrellas = ['Chumacero', 'Neymar', 'Guerrero', 'Maduro', 'Sanchez'];

for (i = 0; i < grupoA.length; i++) {
    console.log(`${grupoA[i]} metió ${goles[i]} y su mejor jugador es ${estrellas[i]}`);
}

var nombre = ['Sr. Garnica', 'Sr. Rodríguez', 'Srta. Azucena'];
var profesion = ['Ingeniero', 'Arquitecto', 'Psicóloga'];
var edad = [28, 30, 25];

for (i = 0; i < nombre.length; i++) {
    console.log(`El ${nombre[i]} tiene ${edad[i]} años y es ${profesion[i]}`);
}
// EJERCICIO 1
var arreglo = [9, 8, 2, 15, 8, 7, 6, 7, 8, 2, 1];
var extrae = +prompt("Indique numero de variables a extraer.");

for (i = arreglo.length - 1; i >= arreglo.length - extrae; i--) {
    if (extrae > arreglo.length) {
        break;
    }
    console.log(arreglo[i]);
}

// EJERCICIO 2
var palabra = prompt("Ingrese palabra a invertir");


for (i = palabra.length - 1; i >= 0; i--) {
    console.log(palabra[i]);
}

// SUMANDO MATRICES
console.log("----------------------------\n");
var matriz1 = [[1, 8, 4], [3, 2, 5], [8, 1, 9]];
var matriz2 = [[3, 1, 2], [4, 3, 1], [0, 2, 1]];

var matriz3 = [];

for (i = 0; i < matriz1.length; i++) {
    matriz3[i] = [];
    for (j = 0; j < matriz1[i].length; j++) {
        matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
    }
}
console.log(matriz3);

// TRASPONER UNA MATRIZ

// https://tiny.cc/transpuesta