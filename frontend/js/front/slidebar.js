//SideBar Animação//

const SideBar = {
    bar: document.querySelector('#sidebar'),
    menu: document.querySelector('#menu'),
    closeIcon: document.querySelector('#close'),
    turmaNome: document.querySelector('#turma-nome'),

    open_sidebar: function () {
        SideBar.bar.style.width = '250px';
        SideBar.turmaNome.style.left = '40%';
    },

    close_sidebar: function () {
        SideBar.bar.style.width = '0';
        SideBar.turmaNome.style.left = '7%';
    },

    init: function () {
        this.menu.addEventListener('click', this.open_sidebar);
        this.closeIcon.addEventListener('click', this.close_sidebar);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    SideBar.init();
})