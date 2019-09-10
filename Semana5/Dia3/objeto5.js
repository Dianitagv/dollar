function Persona(nombreInicial,edadInicial,dniInicial,sueldoIncial=1000){
    var objPersona = {
        nombre:nombreInicial,
        edad:edadInicial,
        dni: dniInicial,
        genero:'No especificar',
        email: 'No dice',
        sueldo: sueldoIncial,
        verPersona: function(){
            console.log(`Nombre: ${this.nombre}
                           Edad: ${this.edad}
                            DNI: ${this.dni}
                         Género: ${this.genero}
                          email: ${this.email}
                         Sueldo: ${this.sueldo} `);
        },
        cambiarGenero:function(nuevoGenero){
            this.genero = nuevoGenero;
        },
        cambiarNombre:function(nuevoNombre,nuevoGenero){
            this.nombre = nuevoNombre;
            this.genero = nuevoGenero;
        }
    }
    return objPersona;
}

var Maria = Persona('Maria',23,233445);
var Juan = Persona('Juan',34,292854325);

//  

Maria.verPersona();
Juan.verPersona();

Maria.cambiarGenero('Mujer');
Maria.verPersona();

Maria.cambiarNombre('Mario','Hombre');
Maria.verPersona();


var arreglo = [0,1,2,3,4,5,6];
// elimina x elementos desde una deterinada posición
// va a eliminar un elemento desde la posición 3
arreglo.splice(3,1);
console.log(arreglo);