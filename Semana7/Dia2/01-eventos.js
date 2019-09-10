// window.onload
// evenbto que se ejecuta pero cuando inicia todos los elementos hijos del DOM

window.onload = function () {

    var body = document.querySelector("body");
    // onmousemov va a ser el evento cuando movamos el mouse
    // agregando puntero
    // var lapicito = document.getElementById("lapicito");
    body.style.cursor = "url('./pencil2.png') 45 140,auto";
    body.onmousemove = function (e) {
        console.log(`La posición en X = ${e.offsetX}`);
        console.log(`La posición en Y = ${e.offsetY}`);

        // lapicito.style.left = `${e.offsetX -20}px`;
        // lapicito.style.top = `${e.offsetY -120}px`;
        // this.appendChild(lapicito);

        var punto = document.createElement("div");
        punto.style.width = "20px";
        punto.style.height = "20px";
        punto.style.borderRadius = "50%";
        punto.style.backgroundColor = "#B32A20";
        punto.style.position = "absolute";
        punto.style.left = `${e.offsetX}px`;
        punto.style.top = `${e.offsetY}px`;
        punto.style.boxShadow = "0 0 6px #fff";

        this.appendChild(punto);

    }
}