let barra = document.getElementById("div-2");
let carga = 0;
let intBarra = setInterval(() => {
    barra.innerHTML = carga + "%";
    barra.style.width = carga + "%";
    carga++;
    if (carga >= 100) {
        carga = 0;
    }
}, 100);