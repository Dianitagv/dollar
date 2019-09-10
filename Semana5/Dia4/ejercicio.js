/* clase pabellón 
  {
                id:1,
                nro: 1,
                precio: 0,
                estado: 'libre'
            }
*/
function pabellon(idPabellon, nombrePabellon, filPabellon, colPabellon, nichosX) {
    var objPabellon = {
        id: idPabellon,
        nombre: nombrePabellon,
        capacidad: filPabellon * colPabellon,
        nro_filas: filPabellon,
        nro_columnas: colPabellon,
        nichos: [],
        liberarPabellon: function () {
            this.nichos = [];
        },
        repoblarPabellon: function(){
            this.liberarPabellon();
            for(var i = 0; i < this.capacidad; i++){
                var objNicho = {
                    precio: 0,
                    estado: 'liebre',
                    i: i +1,
                    nro: i+1
                }
                this.nichos.push(objNicho);
            }
        },
        consultarNichos: function () {
            var nichosLibres = 0;
            for (var i = 0; i < this.nichos.length; i++) {
                if(this.nichos[i].estado == 'libre'){
                    nichosLibres = nichosLibres + 1;
                }
            }
            console.log(`Nichos libres => ${nichosLibres}`);
        }
    }
    return objPabellon;
}

var pabellonJorge = pabellon("San Jorge", 5,4,1);
var pabellomnFelipe = pabellon("Matilde",5,4,2) ;
pabellonJorge.consultarNichos();


// DESARROLLAR FUNCIONES
// VENDER NICHO(IDNICHO) => LA FUNCION, MOSTRARÁ  UN MENSAJE POR CONSOLA, DE "NICHO VENDIDO" TRAS CAMBIAR SU ESTADO A OCUPADO
// SI EL NICHO ESTABA OCUPADO EL SISTEMA DEBERÀ MOSTRAR UN MENSAJE DE ERROR INDICANDO QUE EL NICHO NO SE PUEDE VENDER

// CONSULTARNICHOSLIBRES() => LA FUNCION RETORNARÁ LA CANTIDAD DE NICHOS EN ESTADO LIBRE

// LIBERARPABELLON() => LA FUNCIÓN BORRAR TODOS LOS NICHOS DEL PABELLON
// PABELLON(LIMPIARA EL ARREGLO DE NICHOS)

// REPOBLARPABELLON() => LA FUNCION CREARÁ TANTOS NICHOS COMO CAPACIDAD TENGA EL PABELLON CON VALORES POR DEFECTO PARA CADA NICHO
// OJO > EL NRO Y EL ID DEL NICHO DEBEN SER VALORES CORRELATIVOS, EL PRECIO INICIARÁ EN CERO Y TODOS LOS ESTADOS SERAN LIBRES

