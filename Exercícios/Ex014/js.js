var botao = document.querySelector('#botao')
botao.addEventListener('click', clicou)

function clicou(){
    var data = new Date

    var resultado = document.querySelector('#result')
    resultado.innerHTML = (`O que eu recebi do sistema foi <mark>${data}</mark>`)
}