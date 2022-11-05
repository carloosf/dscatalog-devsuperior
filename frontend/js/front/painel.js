

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
  if (document.querySelector('#status').value == 0) {
    Status.innerHTML = "Ativo"
  } else {
    Status.innerHTML = "Inativo"
  }

  addContador()
}

