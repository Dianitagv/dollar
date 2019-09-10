// var objPerro = {
//     raza: '',
//     color:'',
//     caracter:'',
//     edad: 11,
//     hobbies:['molestar','comer','ensuciar']
// }
// var objPerro1 = {
//     raza:'Pastor Alemán',
//     tamanio:'Grande',
//     color:'negro con café',
//     genero:'Hembra'
// }

// console.log(objPerro);
// console.log(objPerro1);

// console.log(objPerro.edad);
// console.log(objPerro.hobbies[0]);

// var jauria = [objPerro,objPerro1];

// console.log(jauria);

var objPersona1 = {
    nombres : 'Martha',
    apellidos : 'Rojas',
    edad: 29,
    dni: 78562185,
    domicilio: 'paseo los girasoles 101',
    profesion: 'enfermera',
    telefono: '123456789'
}

var objPersona2 = {
    nombres : 'Fredy',
    apellidos : 'Cruz',
    edad: 49,
    dni: 29456732,
    domicilio: 'av ejercito 101',
    profesion: 'odontologo',
    telefono: '987654321'
}

var personas = [];

personas.push(objPersona1);
personas.push(objPersona2);

for(i = 0; i < personas.lenght; i++){
    alert(`${personas[i].nombres} tiene el siguiente número de dni ${persona[i].dni}`);
    var nuevoDni = +prompt("Ingrese nuevo dni");
    personas[i] = nuevoDni;
    var Genero = prompt("Ingrese el genero de la persona.");
    personas[i].genero = Genero ;
    
}


console.log(personas);