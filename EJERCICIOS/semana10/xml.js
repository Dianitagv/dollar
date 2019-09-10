window.onload=function (params) {
    var btntraerdatos=document.getElementById ("btntraerdatos");
    
    var tabla= document.getElementById("tabla");
    
    function ponerdatos (personas) {
        tabla.innerHTML=`<head>
                            <th> ID</th>
                            <th> Nombre</th>
                            <th> Apellidos</th>
                            <th> Correo </th>
                            <th> Foto </th>
                        </head>`
        var tbody=document.createElement("tbody");
        tabla.appendChild(tbody);
        personas.forEach(function(persona) {
           var tr=document. createElement("tr");
           var tdid= document.createElement("tr");
           
           tdid.innerHTML=persona.id;
           tr.appendChild(tdid);

           var tdnombre=document.createElement("td"); 
           tdnombre.innerHTML=persona.first_name;tr.appendChild(tdnombre);

           var tdapellido=document.createElement("td"); 
           tdapellido.innerHTML=persona.last_name;tr.appendChild(tdapellido);

           var tdcorreo =document.createElement("td");
           tdcorreo.innerHTML=persona.email;tr.appendChild(tdcorreo);

           var avatar =document.createElement("img");
           avatar.setAttribute("src",persona.avatar)

           var tdimagen =document.createElement("td");
           tdimagen.appendChild(avatar);tr.appendChild(tdimagen);

           tbody.appendChild(tr);

        });


        
    }
    
    btntraerdatos.onclick=function () {
        var xhr= new XMLHttpRequest();
        console.log(xhr);
        console.log("readyState", xhr.readyState);

        xhr.onreadystatechange=function () {
            switch(xhr.readyState){
                case 1:
                    console.log ("se ha ejecutado la función open()");
                    break;
                case 2:
                    console.log("se ha disparado una peticion http");
                    break;
                case 3:
                    console.log("ya estamos descragando los datos")
                    break;
                case 4:
                    console.log("ya tenemos los datos, la operacion termino");
                    console.log("el codigo de estado es :"+ xhr.status);
                    var json =JSON.parse(xhr.responseText);
                    console.log("el contenido de la solicitud: "+ json);
                    ponerdatos(json.data);
                    break;
                default:
                    console.log("ha ocurrido un error inesperado");
            }
        }
        xhr.open("GET","https://reqres.in/api/users?page=1");

        xhr.send(null);
    } 
}