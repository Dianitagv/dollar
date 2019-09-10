window.onload = function () {

    var inputBuscar = document.getElementById("inputBuscar");
    var frmBusqueda = document.getElementById("frmBusqueda");
    var divCarga = document.getElementById("divCarga");
    var divVacio = document.getElementById("divVacio");
    var cuerpo = document.getElementById("cuerpo");
    var contenedortabla = document.getElementById("contenedorTabla");

    frmBusqueda.onsubmit = function (evento) {
        evento.preventDefault();
        var busqueda = inputBuscar.value;
        divVacio.setAttribute("hidden", "true");
        cuerpo.innerHTML = "";
        contenedortabla.setAttribute("hidden", "true");
        buscarLugar(busqueda);
        console.log("Haciendo submit");
    }
    //  Funcion para hacer la busqueda del lugar en la API de lugares
    function buscarLugar(busqueda) {
        // console.log(`Alguien esta buscando ${busqueda}`);
        divCarga.removeAttribute("hidden");
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                divCarga.setAttribute("hidden", "true");
                var gata = JSON.parse(xhr.responseText).Results;
                console.log(gata);
                dibujarTabla(gata);

            }

            // if (xhr.readyState == 2) {
            //     console.log("Cargando ");


            //     // Cargando ....
            // }
        }
        xhr.open("GET", `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${busqueda}`);
        xhr.setRequestHeader("x-rapidapi-host", "devru-latitude-longitude-find-v1.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "5497c389fdmsha5a6a69df1d05ffp112c5bjsn6908a034d352");
        xhr.send();
    }
    function dibujarTabla(gata) {
        if (gata.length === 0) {
            // No hay resultados
            divVacio.removeAttribute("hidden");

        } else {
            // Si hay resultados
            gata.forEach(function (elemento, i) {
                var tr = document.createElement("tr");
                var tdNro = document.createElement("td");
                tdNro.innerHTML = (i + 1);
                tr.appendChild(tdNro);

                var tdNombre = document.createElement("td");
                tdNombre.innerHTML = elemento.name;
                tr.appendChild(tdNombre);

                var tdTipo = document.createElement("td");
                tdTipo.innerHTML = elemento.type;
                tr.appendChild(tdTipo);

                var tdPais = document.createElement("td");
                tdPais.innerHTML = elemento.c;
                tr.appendChild(tdPais);

                var tdLongitud = document.createElement("td");
                tdLongitud.innerHTML = elemento.lon;
                tr.appendChild(tdLongitud);

                var tdLatitud = document.createElement("td");
                tdLatitud.innerHTML = elemento.lat;
                tr.appendChild(tdLatitud);

                var botonver = document.createElement("button");
                botonver.innerHTML = "<i class='fa fa-eye'></i>";
                botonver.setAttribute("class", "btn btn-primary");
                //botonver.setAttribute("type","button");
                //botonver.setAttribute("data-toggle","modal");
                //botonver.setAttribute("data-target","#modalMapa");
                botonver.onclick = function () {
                    $('#modalMapa').modal('show');
                    map.setCenter(new google.maps.lating(elemento.lat, elemento.lon));
                };

                tr.appendChild(botonver);
                cuerpo.appendChild(tr);
            })
            //tr.appendChild(botonver);


            contenedorTabla.removeAttribute("hidden");

        }
    }
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
        });
        
    }
    initMap();
}




