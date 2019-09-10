/* crear una funcion que reciba 4 parametros
 (una URL, un target(_self,_blank),el alto y el ancho para crear una nueva página*/

 var pagina = prompt("Ingrese dirección: ");
 var donde = prompt("Ingrese target: _self o _ blank ");
 var ancho = +prompt("Ingrese ancho ");
 var alto = +prompt("Ingrese alto ");
 var ventana;

 function crearPagina(Pagina,Donde,Ancho,Alto){

    ventana =  window.open(Pagina,Donde,`width=${Ancho},height=${Alto}`);     
 }

 
crearPagina(pagina,donde,ancho,alto);