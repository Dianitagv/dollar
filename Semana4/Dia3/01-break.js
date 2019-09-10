<<<<<<< HEAD
// break => sentencia que hace finalizar todas las interacciones
//  que le quedan a un ciclo for
var count = 0;
for (var i = 0; i < 1000; i++) {

    // if(i < 5){        

    //     break;

    // }
    // console.log(i);

    if (i % 3 == 0 && i != 0) {
        console.log(i);
        count++;
    }
    if (count == 5) {
        break;
    }
}
//  continue => sentencia que omite las operaciones que debe hacer el 
//  ciclo for, hasta su proximo ciclo.
// esto depende de la ubicacion de la sentencia continue
// se omiten las operaciones desde donde se encuentra la secuencia
// 'continue ' en adelante
var suma = 0;
for (var i = 0; i < 500; i++) {
    if(i % 5 == 0){
        continue;
    }    
    suma +=i;
    
}
console.log(suma);
=======
// break => sentencia que hace finalizar todas las iteraciones
// que le quedan a un ciclo for
var contadora = 0;
for(var i = 0; i < 1000; i++){
    if( i % 3 == 0 ){
        //aqui ya se que "i" es un multiplo de 3
        console.log(i);
        contadora++;
    }
    if(contadora == 5){
        break;
    }
}
// continue => sentencia que omite las operaciones que debe hacer el 
// ciclo for, hasta su proximo ciclo.
// esto depende de la ubicacion de la sentencia continue;
// Se omiten las operaciones desde donde se encuentra la sentencia
// 'continue' en adelante.

// suma acumulada de los numeros entre 0 y 500 excepto 
// los multiplos de 5
var total = 0;
// debugger;
for (var i = 0; i < 11; i++) {
    if(i % 5 == 0){
        continue;
    }
    total = total + i;
}
console.log(total);
>>>>>>> f10d877f8dc957ec01bc17df4812c49e82993428
