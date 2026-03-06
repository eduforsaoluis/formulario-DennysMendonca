const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(event){

event.preventDefault()

const nome = document.getElementById("nome")
const apelido = document.getElementById("apelido")
const email = document.getElementById("email")
const idade = document.getElementById("idade")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmarSenha")

let valido = true

mensagem.textContent = ""
mensagem.className = ""

const campos = [nome,apelido,email,idade,senha,confirmarSenha]

campos.forEach(campo => campo.classList.remove("erro"))

if(nome.value.length < 10){

nome.classList.add("erro")
valido = false

}

/*if(apelido.value.length < 3){

apelido.classList.add("erro")
valido = false

}

if(!email.value.includes("@")){

email.classList.add("erro")
valido = false

}
*/
if(senha.value.length < 6){

senha.classList.add("erro")
valido = false

}

if(senha.value !== confirmarSenha.value){

confirmarSenha.classList.add("erro")
valido = false

}
/*
if(idade.value < 18){

idade.classList.add("erro")
valido = false

}
*/
if(valido){

mensagem.textContent = "Cadastro realizado com sucesso!"
mensagem.className = "sucesso"

}else{

mensagem.textContent = "Corrija os campos destacados."
mensagem.className = "erro-msg"

}

})
