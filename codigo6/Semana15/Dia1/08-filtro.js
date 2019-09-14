
let alumnitos=[
    {id:1, nombre:"juan", edad:20},
    {id:2, nombre:"martin", edad:30},
    {id:3, nombre:"diego", edad:25},
    {id:4, nombre:"marco", edad:23},
]

let mayoresa20 = alumnitos.filter(alumno=>{
    return alumno.edad > 20;
});

mayoresa20.forEach(function (elemento) {
    console.log(elemento);
    
})


