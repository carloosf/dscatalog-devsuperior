const SideBar = {
    bar: document.querySelector('#sidebar'),
    menu: document.querySelector('#menu'),
    closeIcon: document.querySelector('#close'),
    turmaTop:document.querySelector(".turma-Top"),
    main: document.querySelector(".main"),

    open: function () {
        SideBar.turmaTop.style.right = '43%'
        SideBar.bar.style.width = '20%'
        SideBar.main.style.left = '20%'
    },

    close: function () {
        SideBar.bar.style.width = '0';
        SideBar.turmaTop.style.right = '61%'
        SideBar.main.style.left = '0'
    },

    init: function () {
        this.menu.addEventListener('click', this.open);
        this.closeIcon.addEventListener('click', this.close);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    SideBar.init();
})
