const botao = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

botao.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        menu.classList.toggle("ativo");
        botao.classList.toggle("ativo");
    }
});