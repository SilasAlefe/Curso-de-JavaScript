var agora = new Date()
var dia = agora.getDay()

switch (dia) {
    case 0:
        console.log("Hoje é domingo")
        break
    case 1:
        console.log("Hoje é Segundo")
        break
    case 2:
        console.log("Hoje é Terça")
        break
    case 3:
        console.log("Hoje é Quarta")
        break
    case 4:
        console.log("Hoje é Quinta")
        break
    case 5:
        console.log("Hoje é Sexta")
        break
    case 6:
        console.log("Hoje é Sábado")
        break
    default:
        console.log("[ERROR] Dia inválido") 
        break
}