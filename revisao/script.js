/*  1 */
let aprendizado = Number(prompt("Digite um numero para descobrir o que voce aprendeu"))

function seSenao() {
     let perguntaUsuario = prompt('voce estudou no feriado?    Sim ou Não    ' )

       if (perguntaUsuario == "sim") {
        alert("Parabens, voce é o cara!")
        return
       }
       alert("Miguelou")
  
}

function daPraCriarUmaFuncaoDentroDeOutraFuncao() {
    function teste() {
        alert("teste")
    }
    teste()
}
/*                  5              3           */
function soma(primeiroNumero, segundoNumero) {
     return primeiroNumero + segundoNumero
}

function perguntaNumeros() {
    let primeiroNumero = Number(prompt("Digite o primeiro numero"))
    let segundoNumero = Number(prompt("Digite o segundo numero"))

    alert(soma(primeiroNumero, segundoNumero))
}

/*  1 */
switch (aprendizado) {
    case 1:
       seSenao()
        break;
    case 2:
        daPraCriarUmaFuncaoDentroDeOutraFuncao()
        break;
    case 3:
        perguntaNumeros()          
        break;
    default:
        alert("nao existe esse caso")
        break;
}