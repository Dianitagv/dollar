window.onload = function(){
    var form = document.getElementById("formulario");
    var input = document.getElementById("inputTarea");
    var list = document.getElementById("lista");

    function guardar(){
       // localStorage.setItem("misTareas",list.innerHTML);
        localStorage.misTareas = list.innerHTML;
    }
    function obtener()
    {
        var tareasObtenidas = localStorage.getItem("misTareas");
        list.innerHTML = tareasObtenidas;
    }
    obtener();

    form.addEventListener("submit",function(e){
        e.preventDefault();
        var tarea = input.value;
        var li = document.createElement("li");
        li.innerHTML = tarea;
        list.appendChild(li);
        input.value = "";
        guardar();
    });
        
        
    list.addEventListener("dblclick",function(e){
        var tarea = e.target;
        // console.log(tarea);
        // console.log(tarea.parentNode);
        tarea.parentNode.removeChild(tarea);
        guardar();
    })
}