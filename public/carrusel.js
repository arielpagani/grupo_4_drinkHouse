let imagenes = ["images/img1.PNG", "images/img2.PNG", "images/img3.PNG", "images/img4.PNG"];
let cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener("click", e =>{
        let atras = contenedor.querySelector(".atras"),
        adelante = contenedor.querySelector(".adelante"),
        img = contenedor.querySelector("img"),
        tgt = e.target;

        if(tgt == atras){
            if (cont == 0){
                cont = imagenes.length -1;
            } else {
                cont--;
            }
            img.src = imagenes[cont];
        } else if (tgt == adelante){
            if (cont >= imagenes.length - 1){
                cont = 0;
            } else {
                cont++;
            }
            img.src = imagenes[cont];
        }
    });
}

document,addEventListener("DOMContentLoaded", () => { 
let contenedor = document.querySelector(".contenedor");

carrousel(contenedor);
});