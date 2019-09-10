'use strict';

function funcionsinVariables()
{

}

function Saludo(nombre) {


    // var resultado = num1 + num2
}

Saludo("Lucia");





function pago(precio,pago){
    parseFloat(precio);
    parseFloat(pago);
    var vuelto = pago - precio;
    console.log(`El recibo es por ${precio}, el cliente pago con ${pago} y su vuelto es ${vuelto}`);
}

pago("23.00","30.00");


function pago1(precio,pago){
    parseFloat(precio);
    parseFloat(pago);
    var vuelto = pago - precio;
    var pago = [pago,precio,vuelto];
    console.log(`El recibo es por ${pago[1]}, el cliente pagó con ${pago[0]} y su vuelto es ${pago[2]}`)
}

pago1("23","30");