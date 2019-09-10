var cafe = "Latte";

var jugo ={
    ingrediente1:'papaya',
    ingrediente2:'agua',
    ingrediente3: 'azucar',
    ingrediente4: 'platano'
}

delete cafe;
delete jugo.ingrediente4;
console.log(jugo);

var gato = {
    nombre : 'Salem',
    color : 'negro'
}

var gato2 = gato;

console.log(gato);
console.log(gato2);


gato2.nombre = 'Tom';

console.log(gato);
console.log(gato2);

// aplicando {... objeto} copiando un objeto sin hacer referencia a la direccion de memoria
var gato3 = {...gato};
gato3.color = 'Blanco';

console.log(gato);
console.log(gato3);

console.log("comparando gatos");

console.log(gato == gato2);
console.log(gato == gato3);


var auto = {
    motor :'6 cilindros',

}

console.log(Object.keys(auto));