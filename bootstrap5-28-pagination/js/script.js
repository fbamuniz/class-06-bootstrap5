/* Faz a demarcação correta na página atual */
const ativar = (elemento) => {
    let itens = document.getElementsByClassName("page-item");
    for (i = 0; i < itens.length; i++) {
        itens[i].classList.remove("active");
    }
    elemento.classList.add("active");
}