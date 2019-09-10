window.onload = function () {
    var input = document.getElementById("inputCorreo");
    var captcha =

        input.onkeyup = function (e) {
            console.log("una tecla ha sido pulsada");
            console.log("tecla pulsada: " + e.key);
            console.log("codigo de tecla: " + e.keyCode);
            console.log("keycode transformado: " + String.fromCharCode(e.keyCode));
            console.log(this.value);
        }
    input.onkeypress = function (e) {
        console.log("onkeypress: " + this.value);
    }

    captcha.ondbclick = function () {
        imagen.style.filter = "grayscale(100%)";
        imagen.style.border = "2px solid red";
    }

    var comidaCasera = ['Lentejitas', 'Seco de cordero', 'Saltado', 'Ají de gallina'];

    var comidaRapida = ['Salchipapa', 'Empanada','Papa Rellena', 'Salteña'];

    var piqueo = ['chizitos','cuates','popcorn'];

    var selectComida = document.getElementById("comida");
    var selectTipo = document.getElementById("tipoComida");
    selectComida.onchange = function(){
        selectTipo.removeAttribute("disabled");
        selectTipo.innerHTML = "";
        if(this.value != 0){
            switch(this.value){
                case 'ff':
                    for(var i = 0; i < comidaRapida.length;i++)
                    {
                        var opcion = document.createElement("option");
                        opcion.innerHTML = `${comidaRapida[i]}`;
                        opcion.setAttribute("value",comidaRapida[i].charAt(0));
                        selectTipo.appendChild(opcion);
                    }
                break;
                case 'cc':
                    for(var i = 0; i< comidaCasera.length;i++){
                        var opcion1 = document.createElement("option");
                        opcion1.innerHTML = `${comidaCasera[i]}`;
                        opcion1.setAttribute("value",comidaCasera[i].charAt(0));
                        selectTipo.appendChild(opcion1);
                    }
                    break;
                    case 'p':
                    for(var i = 0; i< piqueo.length;i++){
                        var opcion2 = document.createElement("option");
                        opcion2.innerHTML = `${piqueo[i]}`;
                        opcion2.setAttribute("value",piqueo[i].charAt(0));
                        selectTipo.appendChild(opcion2);
                    }
                    break;
            }

        }
    }
}