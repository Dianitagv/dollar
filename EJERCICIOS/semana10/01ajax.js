window.onload = function () {
    var btndescargar = document.getElementById("btndescargar");
    var progressbar = document.getElementById("progreso");

    btndescargar.onclick = function () {
        var xhr = new XMLHttpRequest();
        console.log(xhr);

        //IMGUR.COM
        //CORS
        xhr.open("GET", "https://i.imgur.com/2ZfmtVW.jpg");
        xhr.responseType = "text";
        xhr.onprogress = function (e) {
            console.log(e);
            if (e.lengthComputable) {
                var porcentaje = (e.loaded / e.total) * 100;
                progressbar.style.width = `${porcentaje}%`;

            }
            xhr.onload = function () {
                console.log("esta iniciando una carga del archivo");

            }
            xhr.onload = function () {
                console.log("esta cargando el archivo");

            }

            xhr.onload = function () {
                console.log("la carga ha finalizado");

            }

            xhr.send(null);

        }

    }
}