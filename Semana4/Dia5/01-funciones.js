// function multiplicar(...numeros){
//     var  resultado = 1;
//     for(let i = 0; i <numeros.lenght; i++){
//         resultado = resultado * numeros[i];
//     }
//     return resultado;
// }

// var multiplicacion = multiplicar(2,3,4,5,6);

// console.log(multiplicacion);


// function menu(){
//     alert(`Opciones
//     1.-Suma
//     2.-Resta
//     3.-Salir`
//     )
// }

// function calculadora(operacion){
//     var a = +prompt("Ingrese el primer número");
//     var b = +prompt("Ingrese el segundo número");

//     if(operacion == "sumar")
//     {
//         alert(`La suma de las dos variables será: ${a+b}`)
//     }else{
//         alert(`La resta de las dos variables será: ${a-b}`)
//     }
// }

// do{
//     menu();
//     var opcion = + prompt("Elija una opción de las indicadas anteriormente");
//     if(opcion == 1){
//         calculadora("sumar");        
//     }else if(opcion == 2){
//         calculadora("resta");        
//     }
// }while(opcion !== 3);

// function menu(){
//     alert(
//         `Opciones:
//         1.-Amarillo
//         2.-Rojo
//         3.-Violeta`
//     )
// }

// function menu(){
//     alert(`
//         Opciones:
//         Y - Amarillo
//         R -Rojo
//         V -Violeta`
//     )
// }

// function colores(color){
//     switch(color){
//         case 'Y':
//             return 4;
//         case 'R':
//             return 2;
//         case 'V':
//             return 7;
//         default:
//            return alert(console.log(`Color no deseado.`));
//             break;
//     }
// }

// var resistencia = [];
// for(i = 0; i < 3; i++){
//     menu();
//     var Color = prompt("Ingrese color");
//     resistencia[i] = colores(Color);
// }
// alert(`La resistencia es ${resistencia}`);

var arreglo = [2,45,32,67];

// Push añade un elemento al arreglo
// pop elimina 

console.log(arreglo);

arreglo.push(90);

console.log(arreglo);

arreglo.pop();

console.log(arreglo);