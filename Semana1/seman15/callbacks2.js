let BDalumnos = [
    {
        id: 1,
        nombre: "roberto",
        edad: 30
    },

    {
        id: 1,
        nombre: "danny",
        edad: 30
    },
    {
        id: 3,
        nombre: "patrick",
        edad: 30
    },
];
let getAlumnoById = (id, callback) => {
    for (let i = 0; i < BDalumnos.length; i++) {

        if (BDalumnos[i].id == id) {
            callback(null,BDalumnos[i]);
            return;
        }

    }
    callback("no se encontro el alumno", null);
}
getAlumnoById(8, (error, objAlumno) => {
    if (error) {
        console.log(error);
    } else
        console.log(objAlumno);

});