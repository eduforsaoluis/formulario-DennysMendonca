const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(event){

event.preventDefault()

const sobrenome = document.getElementById("sobrenome")
const email = document.getElementById("email")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmarSenha")
const idade = document.getElementById("idade")

let valido = true

mensagem.textContent = ""
mensagem.className = ""

const campos = [sobrenome,email,senha,confirmarSenha,idade]

campos.forEach(campo => campo.classList.remove("erro"))

if(sobrenome.value.length < 10){

sobrenome.classList.add("erro")
valido = false

}

if(!email.value.includes("@")){

email.classList.add("erro")
valido = false

}

if(senha.value.length < 6){

senha.classList.add("erro")
valido = false

}

if(senha.value !== confirmarSenha.value){

confirmarSenha.classList.add("erro")
valido = false

}

if(idade.value < 18){

idade.classList.add("erro")
valido = false

}

if(valido){

mensagem.textContent = "Cadastro realizado com sucesso!"
mensagem.className = "sucesso"

}else{

mensagem.textContent = "Corrija os campos destacados."
mensagem.className = "erro-msg"

}

})
