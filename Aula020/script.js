const divListaAluno = document.querySelector("#lista-aluno")
let alunos = [
    {
       nome: "Júlia",
       idade: 18
},
 {
       nome: "Pedro",
       idade: 20
},
 {
       nome: "Vitoria",
       idade: 17
},
 {
       nome: "Sofia",
       idade: 17
},
 {
       nome: "Gustavo",
       idade: 18
},
 
  { nome: "Carlos",
     idade: 25 },

  { nome: "Mariana", 
    idade: 22 },

  { nome: "Pedro", 
    idade: 30 },

  { nome: "Ana", 
    idade: 19 },

  { nome: "Lucas",
     idade: 27 },

  { nome: "Fernanda",
     idade: 24 },

  { nome: "Rafael",
     idade: 35 },

  { nome: "Beatriz", 
    idade: 21 },

  { nome: "Gabriel",
     idade: 28 },

  { nome: "Camila",
     idade: 23 },

  { nome: "João", 
    idade: 32 },

  { nome: "Larissa", 
    idade: 20 },

  { nome: "Bruno", 
    idade: 29 },

  { nome: "Aline", 
    idade: 26 },

  { nome: "Diego", 
    idade: 31 },

  { nome: "Patrícia", 
    idade: 34 },

  { nome: "Felipe",
     idade: 33 },

  { nome: "Juliana", 
    idade: 28 },

  { nome: "Eduardo", 
    idade: 36 },

  { nome: "Vanessa",
     idade: 27 },

  { nome: "Ricardo", 
    idade: 40 },

  { nome: "Tatiane", 
    idade: 22 },

  { nome: "André",
     idade: 38 },

  { nome: "Paula", 
    idade: 24 },

  { nome: "Henrique", 
    idade: 37 }
]

for(let i = 0; i < alunos.length; i++ ) {  
    divListaAluno.innerHTML += <li>${aluno[i].nome}, ${aluno[i.idade]} anos
</li>}
  

