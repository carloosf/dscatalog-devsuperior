//crecer o sidebar
const painelMenu = document.querySelector(".painel-menu")
const painelMenuItem = document.querySelector(".painel-menu-item")
var controler = false

painelMenu.addEventListener("click", abre)

function abre(){
    painelMenu.style.width = "20%"
    painelMenuItem.style.color = "blue"
}
