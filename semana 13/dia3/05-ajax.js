function llenarDatosDataTable() {
    var tablaProductos=$('#listaProductos');
    tablaProductos.DataTable({
        "ajax":(
        type:"Get",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/productos"
        timeout:1500,
        dataScr:"",
    );
    "columns":[
        {data:"pro_nom"},
        {data:"pro_desc"},
        {data:"prod_prec"},
    ]
    
}
function imprimirServicios(arregloServicios) {
    var divRow = $('.row');
    var tabla = `<table id="tablaServicios" class="table">
                <thead>
                    <tr>
                    <th>nombre</th>
                    <th>descripción</th>
                    <th>precio</th>
                    <th>imagen</th>
                    </tr>
                </thead>
                </table>`;
    divRow.html(tabla);

    var tablaServicios = $('#tablaServicios')
    var tbody = `<tbody id="tbody"></tbody>`
    tablaServicios.append(tbody);
    var tbodyServicios = $("tbody");

    arregloServicios.forEach(function (servicios) {
        var tr = $(`<tr></tr>`);
        var td1 = $(`<td>${servicios.serv_nom}</td>`);
        var td2 = $(`<td>${servicios.serv_desc}</td>`);
        var td3 = $(`<td>${servicios.serv_price}</td>`);
        var td4 = $(`<td></td>`);
        var img = $(`<img src="${servicios.serv_img}" width="200px"></img>`);


        tr.append(td1)
        tr.append(td2)
        tr.append(td3)
        tr.append(td4)
        td4.append(img)
        tbodyServicios.append(tr);
    });

    tablaServicios.DataTable();


}
function obtenerServicios() {
    $.ajax({
        type: "GET",
        url: "https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout: 1000, //ms
        data: null,
        //exito!
        success: function (respuesta) {
            //lo que quiera ejecutar cuando mi petición haya tenido exito
            console.log(respuesta);
            imprimirServicios(respuesta);

        },
        error: function () {
            console.log("Ha ocurrido un error, no tenemos internet");
        },
        beforeSend: function () {
            console.log("codigo que se ejecutará antes de hacer la petición");
        },
        complete: function (xhr) {
            console.log(xhr.status);
        }
    });
}
function.crearServicios(servicio) {
    $.ajax({
        type:"post",
        url:"https://5d4b6adb00dbb10014879b12.mockapi.io/servicios",
        timeout:1500,
        data:JSON.stringify(servicio),
        contentType:"application/json",
        success:function(respuesta) {
            console.log(respuesta);   
            obtenerServicios();
        },
        error:function (error) {
            console.log(error);
        },
        beforeSend:function() {
            console.log("codigo ejecutado antes de enviar a la data");
            
        }
    })
    
}
var anadirServicios = $('#anadirServicios');
anadirServicios.click(function (e) {
    e.preventDefault();
    var divRow = $(".row");
    var formulario = `<form>
                        <table class="table">
                            <tr>
                                <td>nombre</td>
                                <td>
                                    <input class="form-control" type="text" name="serv_nom"/>
                                </td>
                            </tr>
                            <tr>
                                <td>Descripción</td>
                                <td> 
                                    <input class="form-control" type="text" name="serv_desc">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                Precio
                                </td>
                                <td>
                                    <input class="form-control" type="number" name="serv_price">
                                </td>
                             </tr>             
                        </table>
                            <input type="submit" value="submit" class="btn btn-primary">
                        </form>`
    divRow.html("");
    divRow.html(formulario);

    var miformulario = $('form');
    miformulario.submit(function (e) {
        e.preventDefault();
        var misDatos = miformulario.serializeArray();
        console.log("Datos Form", misDatos);

        var objServicios={};
        misDatos.forEach(function(input){
            objServicios[input.name]=input.value;            
        });

        console.log(objServicios);
        crearServicios(objServicios)    // }

    });

       

});
llenarDatosDataTable();
obtenerServicios();
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4){
//         //COSAS
//     }
// }
// xhr.open("GET","URL");
// xhr.send();