var fecha = new Date();
// imprimir la fecha actual completa
console.log(fecha);

// imprimir el año de la fecha en 4 digitos
console.log(fecha.getFullYear());

// imprimir el mes de la fecha 
console.log(fecha.getMonth());

// imprimir el numero del dia
console.log(fecha.getDate());

// imprimir el numero del día en la semana
console.log(fecha.getDay());

// imprimir la hora de la fecha
console.log(fecha.getHours());

// imprimir los minutos de la fecha actual
console.log(fecha.getMinutes());

// imprimir los segundos de la fecha actual
console.log(fecha.getSeconds());

// imprimir los milisegundos de la fecha actual
console.log(fecha.getMilliseconds());

console.log("modificando el año al 2030");
fecha.setFullYear(2030);
console.log('Nueva fecha' +  fecha);


// setMonth([0-11]) => cambia el mes de la fecha
// setDate([1-31])  => cambia el numero del dia de la fecha
// setHours([0-23]) => cambia la hora de la fecha
// 
// 
// 

// FORMAS DE INSTANCIAR UN OBJETO DE TIPO FECHA
// DEVUELVE LA FECHA DEL ORDENADOR (FRONT END)
var miFecha = new Date();
// DEVUELVE LA FECHA INDICANDO EL ANIO,MES Y DIA
var miFecha2 = new Date(2018,09,08);
console.log(miFecha2);
// DEVUELVE LA FECHA INDICANDO EL ANIO, MES,DIA,HORAS,MINUTOS Y SEGUNDOS
var miFecha3 = new Date(1991,09,08,02,10,45);
console.log(miFecha3);

// 5 es Junio por lo que meses inician en 0
var ayer = new Date(2019,05,27);
console.log(miFecha - ayer);

var navidad = new Date(2019,11,25);
var milisegundos = navidad - miFecha;
var segundos = milisegundos / 1000;
var muntos = segundos/60;
var horas = muntos / 60;
var dias = horas/24;
var semana = dias / 7;
console.log(semana);
