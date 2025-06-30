var bt1 = document.querySelector('#bt1')
var bt2 = document.querySelector('#bt2')
var bt3 = document.querySelector('#bt3')
var bt4 = document.querySelector('#bt4')

bt1.addEventListener('click', clicou1)
bt2.addEventListener('click', clicou2)
bt3.addEventListener('click', clicou3)
bt4.addEventListener('click', clicou4)


function clicou1(){
    var texto = document.getElementById('txt')
    texto.innerHTML += '<p>Clicou no primeiro botão</p>'
}
function clicou2(){
    var texto = document.getElementById('txt')
    texto.innerHTML += '<p>Clicou no Segundo botão</p>'
}
function clicou3(){
    var texto = document.getElementById('txt')
    texto.innerHTML += '<p>Clicou no terceiro botão</p>'
}
function clicou4(){
    var texto = document.getElementById('txt')
    texto.innerHTML += '<p>Clicou no quarto botão</p>'
}