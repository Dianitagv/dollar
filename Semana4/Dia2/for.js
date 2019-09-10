// for(var i = 0; i < 10; i++){
//     console.log("Saludo" + i);
// }

// for(var i = 0; i < 10; i+=1){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// // debugger; 

// var suma = 0;
// for(var i = 1; i < 100; i+=1){    
//     if(i % 2 != 0){
//         var suma = suma + i;
//     }
// }
// console.log(suma);

// var inicio = +prompt("Ingrese primer número: ");
// var final = +prompt("Ingrese último número: ");

// var pares = 0;
// var impares = 0;
// for (i = inicio; i <= final; i++) {
//     if (i % 2 == 0) {
//         pares += 1;
//     } else {
//         impares += 1;
//     }

// }
// console.log("pares " + pares);
// console.log("impares " + impares);

var inicio = +prompt("Ingrese primer número: ");
var final = +prompt("Ingrese último número: ");

for(i = final; i >= inicio; i--){
    if(i%5==0){
        console.log(i);
    }
}