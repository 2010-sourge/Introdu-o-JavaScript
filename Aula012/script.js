let botaoTrocaTema = document.querySelector("#botaoTrocaTema")
let body = document.querySelector("body")

function trocaTema() {
    body.classList.toggle("dark-mode")

    if(botaoTrocaTema.textContent == "Ativar") {
        botaoTrocaTema.textContent = "Desativar"
    }else {
         botaoTrocaTema.textContent = "Ativar"
    }
}

botaoTrocaTema.addEventListener("click", trocaTema)