var botao = document.querySelector('#botao')
botao.addEventListener('click', clicou)

function clicou(){
    var n = window.prompt('Digite um número abaixo: ')

    if (n%2 == 0){
        var msg = 'PAR!'
    } else{
        var msg = 'ÍMPAR!'
    }

    var resultado = document.querySelector('#result')
    resultado.innerHTML = `O número ${n} que foi digitado é <strong>${msg}</strong>`
}