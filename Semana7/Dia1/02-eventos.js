var inputCorreo = document.getElementById("inputCorreo");
var resultado = document.getElementById("resultado");

var personas = [{
    nombre: "Jorge",
    correo: "jgarnica@gmail.com"
}, {
    nombre: "Omar",
    correo: "ojimenez@gmail.com"
}];



// focus => evento que se desencadena cuando el cursos se encuentra sobre un elemento
inputCorreo.onfocus = function () {
    inputCorreo.style.backgroundColor = "#70B388";
    inputCorreo.style.borderBottom = "4px solid #B3625F";
}

// onblur => evento que se desencadena cuando el cursor deja, sale o abandona a un elemento
inputCorreo.onblur = function () {
    inputCorreo.style.backgroundColor = "transparent";
    inputCorreo.style.borderBottom = "2px solid #666666";
    // buscar el correo ingresado en la lista de correos
    var correoIngresado = inputCorreo.value.toLowerCase();
    var correoIngresado = inputCorreo.value.trim();
   
    for(var i = 0; i < personas.length; i++){
        if(correoIngresado === personas[i].correo){
            resultado.removeAttribute("hidden");
            break;
        }
    }
    
    
}
