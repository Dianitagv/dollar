// SINTAXIS OBJETOS
// var objcelular = {
//     pantalla = '6 pulgadas',
//     marca = 'Huawei',
//     memoria = '4 GB',
//     sensorHuella = true
// }

// DE UN PEQUEÑO SISTEMA DE MANTENIMIENTOS DE AUTOS

var objVehiculo1 = {
    marca: 'Toyota',
    modelo: 'Corolla',
    color: 'Rojo',
    anio: 2018,
    mantenimiento: [
        {
            fecha: '01-01-2019',
            observaciones: 'sin observaciones',
            kilometraje: 9000
        },
        {
            fecha: '02-05-2019',
            observaciones: 'se observó un raspón',
            kilometraje: 10000
        }
    ],
    vervehiculo1: function () {
        console.log(this);
    },
    mostrarMantenimientos: function () {
        for (var i = 0; i < this.mantenimiento.length; i++) {
            console.log(`El mantenimiento ${i} se llevó a cabao el ${this.mantenimiento[i].fecha} con un kilometraje de ${this.mantenimiento[i].kilometraje} y tiene las siguientes observaciones ${this.mantenimiento[i].observaciones}`);
        }
    }
}
//objVehiculo1.mostrarMantenimientos();
    var mantenimientoAdicional ={
        fecha: '01-03-2019',
        observaciones: "Estava sucio, no lo lavan",
        kilometraje: 12000
    }

objVehiculo1.mantenimiento.push(mantenimientoAdicional);

objVehiculo1.mostrarMantenimientos();

objVehiculo1.vervehiculo1();



