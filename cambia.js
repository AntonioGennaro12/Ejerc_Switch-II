const pagina            = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");
const miImagen          = document.querySelector("#mi-img");

const IMAGEN_1    = "https://images.unsplash.com/photo-1630168185910-60bcbf5cc8c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmxvcmVzJTIwYmxhbmNhc3xlbnwwfHwwfHw%3D&w=1000&q=80";
const IMAGEN_2    = "https://verdecora.es/blog/wp-content/uploads/2021/03/flores-lilo.jpg.webp";
const IMAGEN_3    = "https://w0.peakpx.com/wallpaper/509/87/HD-wallpaper-beautiful-roseflower-flowers-pink-rose-roses.jpg";
const IMAGEN_DEF  = "https://media.admagazine.com/photos/618a5e4c259e475000cce757/master/w_3000,h_1995,c_limit/93306.jpg";


function cambioEstetica() {
    
    switch (selectOpcionColor.value) {
        case "color-1":
            miImagen.src = IMAGEN_1;
            pagina.style.color = "white";
            selectOpcionColor.style.color = "white";
            selectOpcionColor.style.backgroundColor = "black";
            pagina.style.backgroundColor = "black";
                        break;
        case "color-2":
            miImagen.src = IMAGEN_2;
            pagina.style.color = "violet";
            selectOpcionColor.style.color = "violet";
            selectOpcionColor.style.backgroundColor = "green";
            pagina.style.backgroundColor = "green";
            break;
        case "color-3":
            miImagen.src = IMAGEN_3;
            pagina.style.color = "pink";
            selectOpcionColor.style.color = "pink";
            selectOpcionColor.style.backgroundColor = "brown";
            pagina.style.backgroundColor = "brown";
            break;
        default:
            miImagen.src = IMAGEN_DEF;
            pagina.style.color = "black";
            selectOpcionColor.style.color = "black";
            selectOpcionColor.style.backgroundColor = "grey";
            pagina.style.backgroundColor = "grey";
    }




}