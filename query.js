//$("document").ready(function () {   
//});

var titulo =$('h1');
var parrafo=$('#parrafo');
var modificarParrafo=$('#modificarParrafo');
var agregarClases=$('#agregarClases');
var agregarelemento=$('#agregarelemento');
console.log(titulo.html());

//$().html();
titulo.html("este titulo es mas corto");
parrafo.css("color","orange");
parrafo.css("color", "orange")
        .css("font-weight", "bold")
        .css("background-color","yellow");

modificarParrafo.click(function(){
    var primerParrafo =$("p:first");
    var segundoParrafo=$("p:eq(1)");

    primerParrafo.css("text-align","justify");
    segundoParrafo.css("color","blue");
});
agregarClases.dblclick(function () {
    $(this).removeClass("btn-info");
    //$(this).attr("class","btn btn-success btn-block");
    $(this).addClass("btn").addClass("btn-danger") .addClass("btn-block");    
});
agregarelemento.click(function () {
    $('.row').prepend("<small>Este es una descripcion del tiutlo</small>");
    $('.row').append("<p>hola soy un parrafo nuevo blablablablabala</p>");    
});

$("p:eq(1)").click(function () {
    $(this).toggleClass("text-danger");

});