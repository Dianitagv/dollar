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
]

let getAlumnoById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].id === id) {
                    resolve(alumnos[i]);
                    return;
                }
            }
            reject("no se encontro ningun alumno con ese id: " + id);

        }, 2500);
    });
}
let getCursosbyAlumnoId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let i = 0; i < cursos.length; i++) {
                // console.log(cursos[i])
                if (cursos[i].idalumno === id) {
                    resolve(cursos[i]);
                    return;
                }

            }
            reject("se encontro el alumno, pero no tiene cursos");
        }, 2000)
    })
}
getAlumnoById(5).then(objAlumno => {
    console.log(objAlumno);
    getCursosbyAlumnoId(1).then(({ cursos }) => {
        console.log(cursos);


    }).catch((error) => {
        console.log(error);

    });
}).catch((error) => {
    console.log(error);

})

getAlumnoById(1).then((objAlumno) => {
    console.log(objAlumno);
    return getCursosbyAlumnoId(1);


}).then(({cursos}) => {
    console.log(cursos);

}).catch((error)=>{
    console.log(error);
    
});