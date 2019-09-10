let alumno = [
    {
        id: 1,
        nombre: "jorge",
        edad: 28
    },
    {
        id: 2,
        nombre: "diana",
        edad: 20
    },
    {
        id: 3,
        nombre: "edu",
        edad: 25
    },
    {
        id: 4,
        nombre: "sol",
        edad: 23
    },
]

let cursos = [
    {
        alumnoId: 1,
        cursos: ["phyton", "diseño"]

    },
    {
        alumnoId: 2,
        cursos: ["ethical hacking", "electronica"]
    }
];

let getAlumnoById = (id, callback) => {
    for (let i = 0; i < alumno.length; i++)
        if (alumno[i].id === id) {
            callback(null, alumno[i]);
            return;
        }


    callback("no se encontro el alumno");
}
let getCursosByAlumnoId = (id, callback) => {
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].alumnoId == id) {
            callback(null, cursos[i]);
            return
        }
    }
    callback("no exiten cursos para", null)
}
var id = +prompt("Ingrese el id del Alumno");
getAlumnoById(id, (error, objAlumno) => {
    if (error) {
        console.log(error);
    } 
    else 
    {
        console.log(objAlumno);
        getCursosByAlumnoId(id, (error, objCurso) => {
            if (error) {
                console.log(error);
            } 
            else {
                console.log(objCurso);
            }

        })
    }
})
