window.onload = function () {
    var tbody = document.getElementById("tbody");
    var inputBuscar = document.getElementById("inputBuscar");

    var personas = [
        {
            id: 1,
            nombres: 'Patrick',
            apellidos: 'Rodriguez',
            edad: 27
        },
        {
            id: 2,
            nombres: 'Jorge',
            apellidos: 'Garnica',
            edad: 24
        },
        {
            id: 3,
            nombres: 'Jorge',
            apellidos: 'Montesinos',
            edad: 27
        },
        {
            id: 4,
            nombres: 'Cristian',
            apellidos: 'Juarez',
            edad: 26
        },
        {
            id: 5,
            nombres: 'Azucena',
            apellidos: 'Calla',
            edad: 42
        },
        {
            id: 6,
            nombres: 'Diego',
            apellidos: 'Carhuayo',
            edad: 27
        },
        {
            id: 7,
            nombres: 'Dante',
            apellidos: 'Garcia',
            edad: 42
        },
        {
            id: 8,
            nombres: 'Erick',
            apellidos: 'Vargas',
            edad: 17
        },
        {
            id: 9,
            nombres: 'Paolo',
            apellidos: 'Guerrero',
            edad: 47
        },
        {
            id: 10,
            nombres: 'Jose',
            apellidos: 'Perales',
            edad: 57
        }
    ];

    

    function rellenarCeldas(arregloPersonas) {
        
        var personasConsideradas = [];

        if(arregloPersonas != null)
        {
            personasConsideradas = arregloPersonas;
        }
        else
        {
            personasConsideradas = personas;
        }

        var tr = "";
        tbody.innerHTML = "";

        personasConsideradas.forEach(function (persona) {
            tr = tr + `<tr> 
                            <td>${persona.id}</td>
                            <td>${persona.nombres}</td>
                            <td>${persona.apellidos}</td>
                            <td>${persona.edad}</td>
                        </tr>                    
                        `;
        });
        tbody.innerHTML = tr;
    }
    rellenarCeldas();

    inputBuscar.onkeyup = function (e) {
        // console.log(e.target.value);

        var textoFiltrado = this.value;

        var filtrado = personas.filter(function (persona) {
            return persona.nombres.toLowerCase().includes(textoFiltrado.toLowerCase()) ||
            persona.apellidos.toLowerCase().includes(textoFiltrado.toLowerCase());
        });

        rellenarCeldas(filtrado);
    }
}