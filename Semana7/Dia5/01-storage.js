window.onload = function () {

    var body = document.getElementById("cuerpo");
    var nombre = document.getElementById("inputNombre");
    var apellido = document.getElementById("inputApellido");
    var color = document.getElementById("inputColor");
    var guardar = document.getElementById("inputGuardar");
    var borrar = document.getElementById("btnBorrar");

    guardar.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("apellido", apellido.value);
        localStorage.setItem("color", color.value);

        // var objPreferencias = {
        //     nombre: nombre.value,
        //     apellido: apellido.value,
        //     color: color.value,
        // }
        // console.log(objPreferencias);
        // var preferenciasTexto = JSON.stringify(objPreferencias);

        // localStorage.setItem("objPreferencias",preferenciasTexto);
        // console.log(preferenciasTexto)

        var objPreferencias = {
            nombre: nombre.value,
            apellido: apellido.value,
            color: color.value,
        }
        console.log(objPreferencias);
        var preferenciasTexto = JSON.stringify(objPreferencias);

        localStorage.setItem("objPreferencias", preferenciasTexto);

        console.log(preferenciasTexto);

    });

    function obtener() {
        var nombreGuardado = localStorage.getItem("nombre");
        var apellidoGuardado = localStorage.getItem("apellido");
        var colorGuardado = localStorage.getItem("color");

        if (nombreGuardado && apellidoGuardado && colorGuardado) {
            body.style.backgroundColor = colorGuardado
            color.value = colorGuardado
            nombre.value = nombreGuardado;
            apellido.value = apellidoGuardado;
        }
        else {
            console.log("No hay nada guardado");
        }
    }
    // obtener();
    function obtenerPorObjeto() {
        var objPreferenciasString = localStorage.getItem("objPreferencias");
        var objPreferenciasJSON = JSON.parse(objPreferenciasString);
        console.log("objetoConvertido", objPreferenciasJSON);
        if (objPreferenciasJSON) {
            body.style.backgroundColor = objPreferenciasJSON.color;
            color.value = objPreferenciasJSON.color;
            nombre.value = objPreferenciasJSON.nombre;
            apellido.value = objPreferenciasJSON.apellido;
        }
        else {
            console.log("No existe el objeto");
        }
    }
    obtenerPorObjeto();

    borrar.onclick = function () {
        localStorage.removeItem("nombre");
        localStorage.removeItem("color");
        localStorage.removeItem("apellido");
    }

}

