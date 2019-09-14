window.onload=()=>{
    let traerGatos = ()=>{
        return new Promise((resolve,reject)=>{
        $.ajax({
            type:"GET",
            url:"https://reqres.in/api/users?page=2",
            timeout:1000,
            data: null,
            success: function (respuesta) {
                resolve(respuesta);
            },
            error: function (error) {
                reject(error);   
            },
            beforeSend: function() {
                console.log("Aqui buscando gatos");
            }
        });


        })
    }

    let promesa = traerGatos();
    //esta promesa va estar pendiente a que se ejecute resolve a reject

    console.log(promesa);

    promesa.then((gatos)=>{
        console.log("Exito!! promesa cumplida", gatos);
    }).catch((error)=>{
        console.log("ups algo ha pasado",error);
        
    }); 
    
}