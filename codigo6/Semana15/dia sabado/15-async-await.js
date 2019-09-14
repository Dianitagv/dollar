let alumnos = [
    {
        id: 1,
        nombre: "patricio la estrella",
        edad: 27,
    },
    {
        id: 2,
        nombre: "bob",
        edad: 28,
    },
    {
        id: 3,
        nombre: "arenita",
        edad: 29,
    },
    {
        id: 4,
        nombre: "don cangrejo",
        edad: 30,
    },


]

let cursos = [

    {
        idalumno: 1,
        cursos: ["HTML", "JSX", "Ionic"],
    },

    {
        idalumno: 2,
        cursos: ["webpack", "mongodb", "firebase"],
    },
];

let getAlumnoById = async (id) => {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].id === id) {
            return alumnos[i];

        }
    }

    throw "ups no hay el alumno";
}
let getCursoByAlumnoById = async (id) => {
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].idalumno === id) {
            return cursos[i];
        }
    }
    throw " no se han encontrado cursos para el alumno";
}
let getDatos = async () => {
    let alumno = await getAlumnoById(1);
    let curso = await getCursoByAlumnoById(1);

    console.log(alumno);
    console.log(curso);

    return [alumno,curso];
}

getDatos().then(([alumno, curso]) => {
    console.log(alumno);
    console.log(curso);
}).catch(error => {
    console.log(error);

})

