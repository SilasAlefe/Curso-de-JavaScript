var botao = document.querySelector('#botao')
botao.addEventListener("click", clicou)

function clicou(){
    var n1 = Number(window.prompt('Digite um número: '))
    var n2 = Number(window.prompt('Digite outro número: '))

    if (n1 > n2) {
        var mv = n1
    } else if (n2 > n1){
        var mv = n2
    } else {
        var mv = 'IGUAIS'
    }

    var resultado = document.querySelector("#result")
    resultado.innerHTML = (`Analisando os valores de <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${mv}</strong>`)
}