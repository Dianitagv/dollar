let numeritos =[9, 6, 4,["x","y","z"], 100, 90, 60];
let segundo = numeritos[1];
let primero = numeritos[0];

console.log(primero);
console.log(segundo);

//destructurando un arreglo
let [uno,dos,tres,[xx,yy,zz],...elresto]= numeritos;
console.log(uno);
console.log(dos);
console.log(tres);
console.log(tres-uno);

console.log(xx);
console.log(yy);
console.log(zz);

console.log(elresto);

//destructuracion de objetos

console.log(".........objetos destructurados");

let cevichelas ={
    id:1,
    precio:30,
    descripcion:"ceviche más chelas, plato preferido de codigo",
    componentes:["cerveza","ceviche"],
    oferta:{
        descuento :5,
        condicion:"sabados y domingos"
    }
}
//let precio = cevichela.precio;
//let descripcion = cevichela.descripción;

//console.log(precio);
//console.log(descripcion);
let {id,descripcion,precio:cuantoesta} = cevichelas;
console.log(descripcion);
console.log(cuantoesta);

let{componentes:[pri,seg]}=cevichelas;
console.log(pri);

let {oferta:{condicion}}=cevichelas;
console.log(condicion);


 



 
 











