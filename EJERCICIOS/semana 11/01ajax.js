window.onload = function () {
    var nombre = document.getElementById("nombre");
    var inputtrabajo = document.getElementById("inputtrabajo");
    var btncrear = document.getElementById("btncrear");
    var divalertas = document.getElementById("alertas");
    btncrear.onclick = function (evt) {
        evt.preventDefault();
        var trabajador = {
            name: nombre.value,
            job: inputtrabajo.value,
        };
        var xhr = new XMLHttpRequest();
        // tiempp de respuesta de nuestra peticion cambiando al propiedad es en milisegundos
        xhr.timeout = 1500;

        xhr.ontimeout = function () {
            console.log("tiempo de espera superado");
        }

        xhr.onreadystatechange = function () {
            switch (xhr.readyState) {
                case 1:
                    console.log("configurando");
                    break;
                case 2:
                    console.log("enviando los datos");
                    break;
                case 3:
                    console.log("neee cargando");
                    break;
                case 4:
                    if (xhr.status == 201) {
                        var json = JSON.parse(xhr.responseText);
                        console.log(json);
                        console.log("hecho!!!!");
                        divalertas.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                        tu usuario <strong>${json.name}</strong> Ha sido creado exitosamente con el cargo<strong>${json.job}</strong>
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                      </div>`
                    } else {
                        console.log("respuesta obtneida por status extraño");


                    }
                    break;
                default:
                    console.log("algo inesperado ha pasado");

            }



        }
        // open() pedira dos parametros, el tipo de péticion y la direccion donde se hara
        xhr.open("POST", "https://reqres.in/api/users");
        // cuando se hace una peticion post tenemos que indicar que tipo de datos estamos viajando y esta informacion de configura en la cabeceras (headers de nuestra peticion, )
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.send(JSON.stringify(trabajador));
    }

};


