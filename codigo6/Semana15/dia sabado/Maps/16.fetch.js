window.onload = function () {
    let btnObtenerDatos = document.getElementById
        ("obtenerDatos");
    let inputNombre = document.getElementById("Nombre");
    let inputDireccion = document.getElementById("Direccion");
    let btnEnviarDatos = document.getElementById("enviarDatos")
    btnObtenerDatos.onclick = function () {
        // con una peticion tipo get

        fetch("https://waaa-5eb74.firebaseio.com/restaurantes.json")
            .then((respuesta) => {
                return respuesta.json();


            }).then((respuestaJson) => {
                console.log(respuestaJson);

            }).catch((error) => {
                console.log(error);

            })

    }
    btnEnviarDatos.onclick = () => {
        let Nombre = inputNombre.value;
        let Direccion = inputDireccion.value;
        let objRestaurante = {
            nombre: Nombre,
            direccion: Direccion

        }
        //console.log("objantes",objRestaurante)
        let configuracion = {
            method: 'POST',
            body: JSON.stringify(objRestaurante),
            headers: { 'Content-Type': 'application/json' }
            
        }
        //console.log(configuracion);
        fetch("https://waaa-5eb74.firebaseio.com/restaurantes.json", configuracion)
            .then((respuesta) => {
               // console.log(respuesta)
                return respuesta.json();
            }).then((respuestaJSON) => {
                console.log(respuestaJSON);

            })
    }

}
