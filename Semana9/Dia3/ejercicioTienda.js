window.onload = function () {

    var main = document.getElementById("contenedor");
    var modalTitulo = document.getElementById("modalTitulo");
    var modalImagen = document.getElementById("modalImagen");
    var modalDescripcion = document.getElementById("modalDescripcion");

    // simular la base de datos

    var productos = [
        {
            id: 10,
            nombre: 'Xiomi Redmi 7',
            precio: '150',
            descripcion: 'Smartphone de 6 pulgadas con bateria de 4000 mAh, Buen rendimiento de gama media',
            imagen: 'https://picsum.photos/200/300'
        },
        {
            id: 20,
            nombre: 'Razer Smartphone',
            precio: '300',
            descripcion: 'Bonito con pantalla 4k, Bateria de buen rendimiento de gama alta',
            imagen: 'https://picsum.photos/200/300'
        },
        {
            id: 30,
            nombre: 'Huawei Y5II',
            precio: '700',
            descripcion: 'El huawei Y5II está en nada se anda colgando',
            imagen: 'https://picsum.photos/200/300'
        },
        {
            id: 40,
            nombre: 'Sonny Xperia',
            precio: '600',
            descripcion: 'Pantalla deficiente pero excelente rendimiento y proteccion contra líquidos',
            imagen: 'https://picsum.photos/200/300'
        },
        {
            id: 50,
            nombre: 'Samsung A10',
            precio: '35000',
            descripcion: 'Pantalla deficiente pero excelente rendimiento y proteccion contra líquidos',
            imagen: 'https://picsum.photos/200/300'
        }

    ];

    function buscarProducto(idProducto){
        for(let i = 0; i < productos.length; i++){
            if(productos[i].id == idProducto){
                console.log(productos[i]);
                return productos[i];
            }
        }
    }

    var row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);

    var divProducto = "";
    productos.forEach(function (item) {
        divProducto = divProducto + `<div class="col-md-4 mb-2>
            <div class="card">
                <img src="${item.imagen}" class="card-img-top">
                <div class="card-body">
                    <h4 class="card-title">
                        ${item.nombre}
                    </h4>
                    <p class="card-text">
                        Precio: ${item.precio}$
                    </p>
                    <button class="btn btn-primary click" idproducto="${item.id}">
                        Detalles...
                    </button>
                </div>
            </div>`
    });
    row.innerHTML = divProducto;

    var botones = document.querySelectorAll(".click");
    console.log(botones);

    for(var i = 0; i < botones; i++ ){
        botones[i].onclick = function(){
            modalTitulo.innerHTML = "";
            modalDescripcion = "";
            modalImagen.setAttribute("src","");

            var idProducto = this.getAttribute("idproducto");

            var productoEncontrado = buscarProducto(idProducto);

            if(!productoEncontrado)
            {
                console.log("error producto no encontrado");
                // location.reload();

            }
            else{
                $("#miModal").modal("show");
                modalTitulo.innerHTML = productoEncontrado.nombre;
                modalDescripcion.innerHTML = productoEncontrado.descripcion;
                modalImagen.setAttribute("src", productoEncontrado.imagen);                
            }
        }
    }

}