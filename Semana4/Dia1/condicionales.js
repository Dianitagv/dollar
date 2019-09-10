//  Si el sueldo es mayor a 3500, retener el 13%
var sueldo = prompt("Ingrese su suedo: ");

if(sueldo > 3500){
    console.log("Se retiene el 13 %");
    console.log(`Total a pagar: ${sueldo - sueldo*0.13} soles.` );
} else
{
    console.log(`Total a pagar ${sueldo} soles.`);
}
console.log("Fin del programa.");

// Ejercicio1

// Usuario ingresa 
// HorasTrabajadas=> number
// sueldoporhora => number

// parseInt o el signo + convierte el ingreso con prompt a números

horas = parseInt(prompt("Ingrese horas trabajadas: "));
sueldoHora = parseInt(prompt("Ingrese sueldo por hora:  "));


if(horas < 41){
    sueldo = horas * sueldoHora;
    console.log(`Sueldo a pagar será ${sueldo}`);
}else
{
    sueldo = (40 * sueldoHora) + (horas - 40) * 2 * sueldoHora;
    console.log(`Sueldo a pagar será ${sueldo}`);
}
console.log("Fin del programa.");

// COMPARADORES ARITMÉTICOS

// > mayor que
// < menor que
// <= menor que
// >= mayor que
// == igual que
//  != diferente que

// COMPARADORES LÓGICOS

// p && q   =>  p y q
// p || q   =>  p ó q
// !q       =>  no q 

// EJERCICIO 3

var anio = parseInt(prompt("Ingrese un año: "));

if((anio % 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0)){
    console.log(`${anio} es año bisiesto`);
}
else
{
    console.log(`${anio} no es bisiesto`);
}

