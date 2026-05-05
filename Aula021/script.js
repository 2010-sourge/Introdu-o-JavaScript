const divListafilme = document.querySelector("#Lista-filmes")
const botoesGenero = document.querySelectorAll("[data-genero]")

const filmes = [
    "terror" [
    {"titulo": "O Exorcista", "genero": "terror", "sinopse": "Uma jovem é possuída por uma entidade demoníaca, levando dois padres a realizarem um exorcismo."},
    {"titulo": "Hereditário", "genero": "terror", "sinopse": "Uma família é atormentada por segredos sombrios após a morte da matriarca."},
    {"titulo": "Invocação do Mal", "genero": "terror", "sinopse": "Investigadores paranormais ajudam uma família aterrorizada por uma presença maligna."},
    {"titulo": "A Bruxa", "genero": 2015, "sinopse": "Uma família puritana enfrenta forças sobrenaturais em uma floresta isolada."},
    {"titulo": "Corra!", "genero": "terror", "sinopse": "Um jovem descobre um segredo perturbador ao visitar a família de sua namorada."},
    {"titulo": "It: A Coisa", "genero": "terror", "sinopse": "Um grupo de crianças enfrenta uma entidade maligna que assume a forma de um palhaço."},
    {"titulo": "O Iluminado", "genero": "terror", "sinopse": "Um escritor enlouquece enquanto cuida de um hotel isolado com sua família."},
    {"titulo": "Atividade Paranormal", "genero": "terror", "sinopse": "Um casal registra eventos sobrenaturais perturbadores dentro de sua casa."},
    {"titulo": "Pânico", "genero": "terror", "sinopse": "Um assassino mascarado aterroriza adolescentes seguindo regras de filmes de terror."},
    {"titulo": "Midsommar", "genero": "terror", "sinopse": "Um grupo de amigos participa de um festival sueco que se torna perturbador."}
  ],
  "aventura" [
    {"titulo": "Indiana Jones e os Caçadores da Arca Perdida", "genero": "aventura", "sinopse": "Um arqueólogo enfrenta nazistas em busca de um artefato sagrado."},
    {"titulo": "Jurassic Park", "genero":"aventura" , "sinopse": "Dinossauros clonados fogem do controle em um parque temático."},
    {"titulo": "O Senhor dos Anéis: A Sociedade do Anel", "genero":"aventura" , "sinopse": "Um hobbit inicia uma jornada para destruir um anel poderoso."},
    {"titulo": "Avatar", "genero": "aventura", "sinopse": "Um humano se integra a uma cultura alienígena em um planeta distante."},
    {"titulo": "As Crônicas de Nárnia", "genero": "aventura", "sinopse": "Crianças descobrem um mundo mágico governado por criaturas fantásticas."},
    {"titulo": "Piratas do Caribe: A Maldição do Pérola Negra", "genero": "aventura", "sinopse": "Um pirata busca recuperar seu navio amaldiçoado."},
    {"titulo": "King Kong", "genero": "aventura", "sinopse": "Uma equipe encontra um gorila gigante em uma ilha misteriosa."},
    {"titulo": "A Vida de Pi", "genero": "aventura", "sinopse": "Um jovem sobrevive no mar com um tigre após um naufrágio."}
   
  ],
  "animacao" [
    {"titulo": "Toy Story", "genero":  "animacao", "sinopse": "Brinquedos ganham vida e enfrentam mudanças com a chegada de um novo boneco."},
    {"titulo": "O Rei Leão", "ano":  "animacao", "sinopse": "Um jovem leão precisa assumir seu lugar como rei após uma tragédia."},
    {"titulo": "Procurando Nemo", "genero":  "animacao", "sinopse": "Um peixe atravessa o oceano para encontrar seu filho desaparecido."},
    {"titulo": "Shrek", "genero":  "animacao", "sinopse": "Um ogro embarca em uma missão para salvar uma princesa."},
    {"titulo": "Frozen", "genero":  "animacao", "sinopse": "Duas irmãs enfrentam poderes mágicos e conflitos familiares."},
    {"titulo": "Divertida Mente", "genero":  "animacao", "sinopse": "Emoções controlam a mente de uma garota em crescimento."},
    {"titulo": "Up: Altas Aventuras", "genero":  "animacao", "sinopse": "Um idoso viaja em uma casa voadora rumo a uma aventura."},
    {"titulo": "Os Incríveis", "genero":  "animacao", "sinopse": "Uma família de super-heróis precisa salvar o mundo."},
    {"titulo": "Moana", "genero":  "animacao", "sinopse": "Uma jovem navega pelo oceano para salvar seu povo."},
    {"titulo": "Homem-Aranha no Aranhaverso", "genero":  "animacao", "sinopse": "Várias versões do herói se unem em diferentes dimensões."}
  ],
  "acao" [
    {"titulo": "Duro de Matar", "genero": "acao", "sinopse": "Um policial enfrenta terroristas em um prédio."},
    {"titulo": "Gladiador", "genero": "acao", "sinopse": "Um general romano busca vingança como gladiador."},
    {"titulo": "John Wick", "genero": "acao", "sinopse": "Um assassino aposentado retorna ao submundo para vingança."},
    {"titulo": "Velozes e Furiosos", "genero": "acao", "sinopse": "Corridas ilegais se cruzam com investigações policiais."},
    {"titulo": "Missão Impossível", "genero": "acao", "sinopse": "Um agente secreto realiza missões arriscadas contra o tempo."},
    {"titulo": "Matrix", "genero": "acao", "sinopse": "Um hacker descobre a realidade simulada em que vive."},
    {"titulo": "Os Vingadores", "genero": "acao", "sinopse": "Heróis se unem para salvar a Terra de uma invasão."},
    {"titulo": "Batman: O Cavaleiro das Trevas", "genero": "acao", "sinopse": "Batman enfrenta o caos causado pelo Coringa."},
    {"titulo": "300", "genero": "acao", "sinopse": "Espartanos enfrentam um exército persa em batalha épica."},
    {"titulo": "Rambo: Programado para Matar", "genero": "acao", "sinopse": "Um veterano de guerra luta contra autoridades hostis."}
  ],
  "comedia" [
    {"titulo": "Se Beber, Não Case!", "genero": "comedia", "sinopse": "Amigos tentam lembrar o que aconteceu após uma despedida de solteiro caótica."},
    {"titulo": "As Branquelas", "genero": "comedia", "sinopse": "Agentes do FBI se disfarçam como socialites para resolver um caso."},
    {"titulo": "Todo Mundo em Pânico", "genero": "comedia", "sinopse": "Uma paródia de filmes de terror com situações absurdas."},
    {"titulo": "Ace Ventura", "genero": "comedia", "sinopse": "Um detetive excêntrico procura animais desaparecidos."},
    {"titulo": "Debi & Lóide", "genero": "comedia", "sinopse": "Dois amigos ingênuos embarcam em uma viagem cheia de confusões."},
    {"titulo": "Click", "genero": "comedia", "sinopse": "Um homem controla sua vida com um controle remoto mágico."},
    {"titulo": "Gente Grande", "genero": "comedia", "sinopse": "Amigos se reencontram anos após a infância."},
    {"titulo": "O Máskara", "genero": "comedia", "sinopse": "Um homem ganha poderes ao usar uma máscara mágica."},
    {"titulo": "Zoolander", "genero": "comedia", "sinopse": "Um modelo se envolve em uma conspiração internacional."},
    {"titulo": "Escola de Rock", "genero": "comedia", "sinopse": "Um músico finge ser professor e monta uma banda com alunos."}
  ]];

  function filtrarFilmes(genero) {
    divListafilme.innerHTML = ""
     const filmesTerror = filmes.filter((filme) => {
        return filme.genero === genero }) 
    
    filmesTerror.forEach((filme) => {
        divListafilme.innerHTML += <li><b>${filme.titulo}</b>  <br> $(filme.sinopse) </br> <i>$(filme.genero)</i></li>
    })
  }
botoesGenero.forEach((botao) =>{
    botao.addEventListener("click", () => {
        const genero = botao.datasert.genero
        filtrarFilmes(genero)
    })
})