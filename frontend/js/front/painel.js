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

//CADASTRAR ALUNO//

const alunos = document.querySelectorAll('#aluno')
const contador = document.querySelector('#qtd-alunos')
var qtdAlunos = alunos.length
renderContador()

function addContador() {
  qtdAlunos++
  renderContador()
}

function renderContador() {
  document.querySelector('#qtd-alunos').innerHTML = qtdAlunos
}

function addAluno() {
  var table = document.querySelector(".tabela-aluno")
  qtdAlunos + alunos.length

  var row = table.insertRow(qtdAlunos + 1);

  var id = row.insertCell(0);
  var matricula = row.insertCell(1);
  var nome = row.insertCell(2);
  var idade = row.insertCell(3);
  var media = row.insertCell(4);
  var Status = row.insertCell(5);

  id.innerHTML = qtdAlunos + 1;

  nome.innerHTML = document.querySelector('#nome').value;
  matricula.innerHTML = document.querySelector('#matricula').value;
  idade.innerHTML = document.querySelector('#idade').value;
  media.innerHTML = 0
  Status.innerHTML = document.querySelector('#status').value;
  addContador()
}

