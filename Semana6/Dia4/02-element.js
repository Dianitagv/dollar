var autos = ["toyota","daewoo","hyundai","chery"];
var principal = document.getElementById("principal");
var ul = document.createElement("ul");

for(var i = 0; i < autos.length;i++){
    var li = document.createElement("li");    
    ul.appendChild(li);
    li.innerHTML = autos[i];
    li.style.display = "inline-block"; //inline-block quita las viñetas
    li.style.marginRight = "10px";
    li.classList.add("item");
}

principal.appendChild(ul);

// [elemento].children devuelve un arreglo
// con todos los elementos hijos de un elemento padre
console.log(ul.children[2]);

