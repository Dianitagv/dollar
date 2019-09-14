interface iPersona{
    nombre:string,
    apellido:string,
    dni:number
    talla?:number
}
let persona2:iPersona ={
    nombre:"jorge",
    apellido: "Garnica",
    dni: 66666666,
}
let mostrarDatos =(persona:iPersona)=>{
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.dni);
    if(persona.talla){
        console.log(persona.talla);
        
    }
    
    
    
}
let objPersona:iPersona={
    nombre:"Patrick",
    apellido:"Rodriguez",
    dni:123456
}

mostrarDatos(objPersona);