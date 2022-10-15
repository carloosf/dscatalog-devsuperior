
//SideBar Animação//

const SideBar = {
  bar: document.querySelector('#sidebar'),
  menu: document.querySelector('#menu'),
  closeIcon: document.querySelector('#close'),
  turmaNome: document.querySelector('#turma-nome'),

  open: function() {
    SideBar.bar.style.width = '250px';
    SideBar.turmaNome.style.left = '40%';
  },

  close: function() {
    SideBar.bar.style.width = '0';
    SideBar.turmaNome.style.left = '12%';
  }, 

  init: function() {
    this.menu.addEventListener('click', this.open);
    this.closeIcon.addEventListener('click', this.close);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  SideBar.init();
})

//CADASTRAR ALUNO//

