//CADASTRO DE TURMA

qtdTurmas = document.querySelector('#qtdTurmas')

function addTurma() {
    var maxAlunos = document.querySelector('#maxalunos').value

    var turmas = document.querySelector('#salas-cards').innerHTML
    turmas = turmas + "<li>" + maxAlunos + "</li>"

    document.querySelector("#turmas").innerHTML =  turmas
    console.log(turmas.length);
}