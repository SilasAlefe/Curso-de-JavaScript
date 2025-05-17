//var nasc = window.document.querySelector('input#nasc')
//ano = Number(nasc.value)
//As variaveis serão lidas certinho e como não tem valor no input ele registra como 0 e fica esperando o clique no botão verificar para entrar na função, e quando ele é clicado começa-se a ler as linhas da função e como não há novamente a chamada da variável 'ano', ele vai mostrar a primeira leitura antes de entrar na função, que é 0, por isso é mais funcional já deixa essas linhas dentro da função

var btn = window.document.querySelector('input#btn')
btn.addEventListener('click', verificar)

function verificar() {
    var nasc = window.document.querySelector('input#nasc')
    var ano = Number(nasc.value)
    var sexo1 = window.document.querySelector('input#op1')
    var sexo2 = window.document.querySelector('input#op2') 

    if (sexo1.checked == true) {
        sexo = sexo1.value
    } else if (sexo2.checked == true){
        sexo = sexo2.value
    } else {
        sexo = 'vazio'
    }
    //eu poderia usar o .checked ao inves do .value e fazer uma verificação se for true or false

    var result = window.document.querySelector('div#result')

    var hoje = new Date()
    var anohoje = hoje.getFullYear()
    if (sexo=='Homem') {
            if (ano>=2007){
                    result.style.textAlign='center'
                    result.innerHTML = (`
                        Detectamos um ${sexo1.value} com ${anohoje-ano} anos
                        <img src="Imagens/Redimensionadas/1menor18man250x250.png" alt="">
                        `)
                } else if (ano>=1975 && ano<2007){
                    result.style.textAlign='center'
                    result.innerHTML = (`
                        Detectamos um ${sexo1.value} com ${anohoje-ano} anos
                        <img src="Imagens/Redimensionadas/2menor50man250x250.png" alt="">
                        `)
                } else if (ano>0 && ano>=1825){
                    result.style.textAlign='center'
                    result.innerHTML = (`
                        Detectamos um ${sexo1.value} com ${anohoje-ano} anos
                        <img src="Imagens/Redimensionadas/3maior50man250x250.png" alt="">
                        `)
                } else{
                    if (ano=='0'){
                        window.alert("VOCÊ PRECISA DIGITAR O ANO DE NASCIMENTO")
                    } else{
                        window.alert("VOCÊ DEVE INSERIR UMA IDADE ADEQUADA")    
                    }
                }

    } else if (sexo == 'Mulher'){
        if (ano>=2007){
            result.style.textAlign='center'
            result.innerHTML = (`
                Detectamos um ${sexo2.value} com ${anohoje-ano} anos
                <img src="Imagens/Redimensionadas/1menor18woman250x250.png" alt="">
                `)
        } else if (ano>=1975 && ano<2007){
            result.style.textAlign='center'
            result.innerHTML = (`
                Detectamos um ${sexo2.value} com ${anohoje-ano} anos
                <img src="Imagens/Redimensionadas/2menor50woman250x250.png" alt="">
                `)
        } else if (ano>0 && ano>=1825){
            result.style.textAlign='center'
            result.innerHTML = (`
                Detectamos um ${sexo2.value} com ${anohoje-ano} anos
                <img src="Imagens/Redimensionadas/3maior50woman250x250.png" alt="">
                `)
        } else{
            if (ano=='0'){
                window.alert("VOCÊ PRECISA DIGITAR O ANO DE NASCIMENTO")
            } else{
                window.alert("VOCÊ DEVE INSERIR UMA IDADE ADEQUADA")    
            }
        }
    } else {
        window.alert('VOCÊ PRECISA SELECIONAR O SEXO')
        if (ano=='0') {
            window.alert("VOCÊ PRECISA DIGITAR O ANO DE NASCIMENTO")
        }
    }
}
//Falta limitar para mostrar mensagem de erro quando não selecionarem o sexo ou não digitarem o ano de nascimento