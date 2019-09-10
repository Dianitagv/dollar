var productos = [
    {
        codigo:"0001",
        descripcion: "Laptop Toshiba",
        precio: 4250.00,
        imagen: "http://placehold.it/100x100",
        existencias: 45,
        estado: "activo"
        
        
    },
    {
        codigo:"0002",
        descripcion: "Laptop Lenovo",
        precio: 4501.00,
        imagen: "http://placehold.it/100x100",
        existencias: 41,
        estado: "activo"
    },
    {
        codigo:"0003",
        descripcion: "Laptop Acer",
        precio: 4250.00,
        imagen: "http://placehold.it/100x100",
        existencias: 42,
        estado: "activo"
    },
    {
        codigo:"0004",
        descripcion: "Laptop HP",
        precio: 1450.00,
        imagen: "http://placehold.it/100x100",
        existencias: 43,
        estado: "activo"
    },
];

var contenedor = document.getElementById("contenedor");
var tabla = document.createElement("table");
tabla.setAttribute("border","1");
tabla.innerHTML = `<thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Imagen</th>
                            <th>Existencias</th>
                            <th>Estado</th>
                        </tr>
                    </thead>`;

for(var i = 0; productos.length;i++){
    var trfila = document.createElement("tr");

    var tdCodigo = document.createElement("td");
    var tdDescripcion = document.createElement("td");
    var tdPrecio = document.createElement("td");
    var tdImagen = document.createElement("td");
    var tdExistencia = document.createElement("td");
    var tdEstado = document.createElement("td");
// Colocando el contenido en cada td
    tdCodigo.innerHTML = productos[i].codigo;
    tdDescripcion.innerHTML = productos[i].descripcion;
    tdPrecio.innerHTML = productos[i].precio;
    tdImagen.innerHTML = `<img src=${productos[i].imagen}/>`;
    tdImagen.innerHTML = productos[i].imagen;
    tdExistencia.innerHTML = productos[i].existencias;
    tdEstado.innerHTML = productos[i].estado;
// Inyectando los td dentro de cada fila
    trfila.appendChild(tdCodigo);
    trfila.appendChild(tdDescripcion);
    trfila.appendChild(tdPrecio);
    trfila.appendChild(tdImagen);
    trfila.appendChild(tdExistencia);
    trfila.appendChild(tdEstado);

    // Inyectar todo el tr o fila en la tabla
    tabla.appendChild(trfila);
}



contenedor.appendChild(tabla);
