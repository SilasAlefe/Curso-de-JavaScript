function carregar() {
    var agora = new Date()
    var tempo = agora.getHours()

    if (tempo>=5 && tempo<13) {
        var p = window.document.querySelector('section')
        p.innerHTML = (`
            <div id="msg">Agora são ${tempo} horas</div> <img src="Imagens/Amanhecer-250x250.png">
            `)
        document.body.style.backgroundColor = '#BAB393'
    } else if (tempo>=13 && tempo<17) {
        var p = window.document.querySelector('section')
        p.innerHTML = (`
            <div id="msg">Agora são ${tempo} horas</div> <img src="Imagens/Entardecer-250x250.png">`)
        document.body.style.backgroundColor = '#AF7248'
    } else{
        var p = window.document.querySelector('section')
        p.innerHTML = (`
            <div id="msg">Agora são ${tempo} horas</div> <img src="Imagens/Anoitecer-250x250.png">`)
        document.body.style.backgroundColor = '#242220'
    }
}