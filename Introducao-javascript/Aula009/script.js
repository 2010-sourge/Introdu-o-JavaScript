let numeroTabuada = Number(prompt("Digite um numero para descobrir a tabuada"))

 for(let indice = 1; indice <= 10; indice ++ ) {
    console.log (`${numeroTabuada} x ${indice} = ${numeroTabuada * indice}`) 
}
   

let pergunta = prompt ("Digite 2 para sair do programa")
while (pergunta == 2) {
    console.log("Voce entrou no programa")
    indice++
}
console.log("voce saiu")


let indice = 20