const abrir = document.getElementById("open");
const fechar = document.getElementById("closed");
const invisivel = document.querySelector(".invisible");

fechar.style.display = "none";

abrir.addEventListener("click", clicar);

function clicar() {
    abrir.style.display = "none";
    fechar.style.display = "block";
    invisivel.classList.remove("invisible");
}

fechar.onkeydown = function escapar() {
    invisivel.classList.add("invisible");
    fechar.style.display = "none";
    abrir.style.display = "block";
}