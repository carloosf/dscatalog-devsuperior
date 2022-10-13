const menu = document.querySelector('.menuDialog')

const buttonOpenMenu = document.querySelector('#OpenMenu')
const buttonCloseMenu = document.querySelector('.close')

buttonOpenMenu.onclick = function (){
    menu.showModal()
}

buttonCloseMenu.onclick = function (){
    menu.close()
}

const addAlunoDialog = document.querySelector(".addAlunoScreen")

const buttonOpenDialog = document.querySelector(".openDialog")
const buttonCloseDialog = document.querySelector(".closeDialog")

buttonOpenDialog.onclick = function (){
    addAlunoDialog.show()
}

buttonCloseDialog.onclick = function (){
    addAlunoDialog.close()
}