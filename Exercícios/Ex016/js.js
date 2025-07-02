var botao = document.querySelector('#botao')
botao.addEventListener('click', clicou)

function clicou(){
    var nasc = Number(window.prompt('Em que ano você nasceu?'))

    var data = new Date
    var ano = data.getFullYear()

    var resultado = document.querySelector('#result')
    resultado.innerHTML = (`Quem nasceu em ${nasc} tem ou vai fazer <strong>${ano-nasc}</strong> em ${ano}.`)
}