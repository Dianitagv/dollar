<<<<<<< HEAD
var marcas = ["Hyundai","Toyota","Kia","Audi","Nissan"];
// IMPRIMIENDO UN ELEMENTO DEL ARREGLO
console.log(marcas[2]);
console.log(marcas);
// ASIGNANDO EL VALOR EN  LA POSICION DE UN ARREGLO

marcas[3] = "Chery";

console.log(marcas[3]);

console.log(marcas);

var elementos = marcas.length;
console.log(elementos);
console.log(marcas.length);

// RECORRIENDO UN ARREGLO

for(var i = 0; i < marcas.length; i++){
    console.log(`Posiciòn ${i} => ${marcas[i]}`);
}

var numeros = [2,3,4,6,12,6,1,6,2]
for(var i = 0; i < numeros.length v ; i++){
    numeros[i] = numeros[i]**2;
}
console.log(numeros);
=======
// creando un arreglo con elementos iniciales;
var marcas = ["Hyundai","Toyota","Kia","Audi","Nissan"];
// creando un arreglo vacío:
var equipos = [];
// imprimiendo un elemento del arreglo marcas
console.log(marcas[2]);
console.log(`${marcas[0]} y ${marcas[3]}`);
// imprimiendo todo un arreglo
console.log(marcas);
// asignando el valor en una posicion del arreglo
marcas[3] = "Daewoo";
console.log(marcas);
// PROPIEDADES BASICAS DE LOS ARREGLOS
// Obtener la cantidad de elementos de un arreglo
// length => retorna la cantidad de elementos de un
// arreglo
var elementos = marcas.length;

console.log(elementos);

console.log(marcas.length);

// Recorriendo un arreglo
for(var i = 0; i < marcas.length; i++){
    console.log(`Posicion ${i} => ${marcas[i]}`);
}
// Ejercicios
// 1. Declarara un arreglo de 10 numeros enteros
// y modificar dichos numeros por sus cuadrados
// al final, imprimir el arreglo resultante
// Ejm [4,7,9,3] => [16, 49, 81, 9]

var enteros = [4,6,3,7,8,9,1,10,5];
console.log(enteros);
for(var i = 0; i < enteros.length; i++){
    enteros[i] = enteros[i] * enteros[i];
}
console.log(enteros);
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
