var persona2 = {
    nombre: "jorge",
    apellido: "Garnica",
    dni: 66666666
};
var mostrarDatos = function (persona) {
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if (persona.talla) {
        console.log(persona.talla);
    }
};
var objPersona = {
    nombre: "Patrick",
    apellido: "Rodriguez",
    dni: 123456
};
mostrarDatos(objPersona);
