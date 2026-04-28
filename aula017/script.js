/* introduçãoa objetos */

let aluno = {
    nome: "Júlia",
    idade: 18,
    curso: "ADS",
    materias: ["ui/ux design", "Logica de programação", "Modelagem de banco de dados"],
    endereço: {
        Cidade: "São Paulo",
        Bairro: "Lapa",
        Rua: "George Smith"
    }
}


aluno.status = true


console.log(aluno)
console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.curso)
console.log(aluno.materias[2])
console.log(aluno.endereço)