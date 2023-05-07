const pagina            = document.querySelector("body");
const selectOpcionColor = document.querySelector("select");
const miImagen          = document.querySelector("#mi-img");

const IMAGEN_1    = "https://cdn.pixabay.com/photo/2019/06/04/07/46/lilacs-4250869_640.jpg";
const IMAGEN_2    = "https://w0.peakpx.com/wallpaper/63/615/HD-wallpaper-bunch-of-light-purple-flowers-purple.jpg";
const IMAGEN_3    = "https://besthqwallpapers.com/Uploads/10-2-2020/121214/thumb2-pink-roses-macro-pink-flowers-bokeh-roses.jpg";
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