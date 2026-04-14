let botaoMudaTexto = document.querySelector("#btnMudaTexto")
let titulo = document.querySelector("#Titulo")

function mudaTexto() {
titulo.innerHTML = "Júlia"
}


botaoMudaTexto.addEventListener("click", mudaTexto)