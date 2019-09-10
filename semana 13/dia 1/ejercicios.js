var cantidad = +prompt("Ingrese cantidad de personas: ");

if (cantidad < 201) {
    console.log(`El presupuesto para ${cantidad} personas es de ${cantidad * 95}`);
} else if (cantidad > 200 && cantidad <= 300) {
    console.log(`El presupuesto para ${cantidad} personas es de ${cantidad * 85}`);
}else{
    console.log(`El presupuesto para ${cantidad} personas es de ${cantidad *75}`);
}