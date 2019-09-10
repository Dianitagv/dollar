var nombre="osmar";
let apellido= "caceres";
if (true){
    console.log(nombre);
    // console.log(apellido);

    var nombre="patrick";
    let apellido="rodriguez";

    console.log(nombre);
    console.log(apellido);
    
    let edad =20;
    console.log(edad);
    
    for(var i=0;i<6;i++){
        console.log(i);
        
    }
} 
console.log(nombre);
console.log(apellido);
//console.log(edad);

try{
    // codigo que va eejecutar y sospecha que va generar error
    console.log(edad);
}catch(error){
    //imprimir el error pero sin detener la ejecucion del codigo
    console.error(error)
}
console.log("=)");

