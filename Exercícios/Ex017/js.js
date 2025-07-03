var botao1 = document.querySelector('#btn1')
botao1.addEventListener('click', clicou1)

var botao2 = document.querySelector('#btn2')
botao2.addEventListener('click', clicou2)

function clicou1(){
    var aleat = Math.random()
    var num = Math.trunc(1 + (aleat*100))

    var resultado = document.querySelector('#result')
    resultado.innerHTML += (`<p>Acabei de pensar no número <mark>${num}</mark>!</p>`)
}

function clicou2(){
    var resultado = document.querySelector('#result')
    resultado.innerHTML = ("")
}