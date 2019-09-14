let alumnitos=[
    {id:1, nombre:"juan", edad:20},
    {id:2, nombre:"martin", edad:30},
    {id:3, nombre:"diego", edad:25},
    {id:4, nombre:"marco", edad:23}
]
let encontrado = alumnitos.find((alumno) =>{
    return alumno.edad === 25;
})
console.log(encontrado);

   
