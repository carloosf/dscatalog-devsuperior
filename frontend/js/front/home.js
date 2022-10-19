scroll = document.querySelector(".upScroll")
header = document.querySelector(".header-logo")
page = document.querySelector('body')

console.log(window.pageYOffset)


window.addEventListener("scroll", upScroll)

function upScroll() {
    if (window.pageYOffset > 300) {

        header.style.position = 'fixed'
        header.style.background = '#008C8C'

    } else if (window.pageYOffset < 100) {

        header.style.position = 'absolute'
    }
};

//DROPDOWN


const SideBar = {
    bar: document.querySelector('#dropdown-menu'),
    menu: document.querySelector('#menu'),
    closeIcon: document.querySelector('#close'),
    turmaNome: document.querySelector('#turma-nome'),

    open: function () {
        SideBar.bar.style.width = '250px';
        SideBar.turmaNome.style.left = '40%';
    },

    close: function () {
        SideBar.bar.style.width = '0';
        SideBar.turmaNome.style.left = '12%';
    },

    init: function () {
        this.menu.addEventListener('click', this.open);
        this.closeIcon.addEventListener('click', this.close);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    SideBar.init();
})


