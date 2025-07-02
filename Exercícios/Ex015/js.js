var botao = document.querySelector('#botao')
botao.addEventListener('click', clicou)

function clicou(){
    var meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setempo', 'Outubro', 'Novembro', 'Dezembro')
    var semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado')
    var data = new Date
    var dia = data.getDate()
    var mes = data.getUTCMonth()
    var ano = data.getFullYear()
    var diasem = data.getDay()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()


    var resultado = document.querySelector('#result')
    resultado.innerHTML = (`<p>Dia: <mark>${dia}</mark></p>`)
    resultado.innerHTML += (`<p>Mês: <mark>${meses[mes]}</mark></p>`)
    resultado.innerHTML += (`<p>Ano: <mark>${ano}</mark></p>`)
    resultado.innerHTML += (`<p>Dia da semana: <mark>${semana[diasem]}</mark></p>`)
    resultado.innerHTML += (`<p>Hora: <mark>${hora}</mark></p>`)
    resultado.innerHTML += (`<p>Minutos: <mark>${min}</mark></p>`)
    resultado.innerHTML += (`<p>Segundos: <mark>${seg}</mark></p>`)
}