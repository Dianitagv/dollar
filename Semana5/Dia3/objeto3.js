// // Carrito de compras que tenga nombre usuarios y propiedad productos que se una arreglo donde guarda prodictos 
// nombre cantidad uy precio y funcion que devuelva los productos 
// recuerde usar this

var carritoCompras1 = {
    nombreUsuario: 'Jose123',
    productos: [
        {
            nombreProducto: 'laptop',
            cantidadProducto: 3,
            precioProducto: 1500.00
        },
        {
            nombreProducto: 'disco duro',
            cantidadProducto: 2,
            precioProducto: 150.00
        }
    ],
    verProductos1: function () {
        console.log(this);
    },
    mostrarCompra: function () {
        for (var i = 0; i < this.productos.length; i++) {
            console.log(`El producto ${i} tiene como nombre: ${this.productos[i].nombreProducto} tiene ${this.productos[i].cantidadProducto} unidades y un precio de ${this.productos[i].precioProducto}`);
        }
    }
}

var agregaItem = {
    nombreProducto: 'Monitor AOC',
    cantidadProducto: 3,
    precioProducto: 400.00
}


carritoCompras1.productos.push(agregaItem);
carritoCompras1.mostrarCompra();
carritoCompras1.verProductos1();


