var aleat = Math.random()
var num = Math.trunc(1 + (aleat*100))

var botao = document.querySelector('#btn')
botao.addEventListener('click', clicou)

function clicou(){
    var chute = window.prompt('Qual é o seu palpite?')
    var resposta = document.querySelector('#result')

    if (chute > num){
        resposta.innerHTML += (`<p>Você falou ${chute}. Meu número é <strong>MENOR!</strong></p>`)
    } else if (chute < num){
        var resposta = document.querySelector('#result')
        resposta.innerHTML += (`<p>Você falou ${chute}. Meu número é <strong>MAIOR!</strong></p>`)
    } else {
        var divbotao = document.querySelector("#div-botao")
        divbotao.style.visibility = 'hidden'
        var resposta = document.querySelector('#result')
        resposta.innerHTML += (`<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}</p>`)

    }
}