var botao = document.querySelector('#botao')
botao.addEventListener('click', clicou)

function clicou(){
    var nome = String(window.prompt('Qual o nome do aluno?'))

    var n1 = Number(window.prompt(`Qual a primeira nota de ${nome}?`))

    var n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`))

    var media = (n1+n2)/2

    if (media >= 6) {
        var msg = 'Meus parabéns!'
    } else {
        var msg = 'Estude um pouco mais!'
    }
    var resultado = document.querySelector("#result")
    resultado.innerHTML = (`
        <p>Calculando a média final de <mark>${nome}</mark></p>
        <p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>
        <p>A média final será <mark>${media}</mark></p>
        <p>A mensagem que temos é: <strong id='msg'>${msg}</strong></p>
            `)
}