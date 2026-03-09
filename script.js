const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(event){

event.preventDefault()

const nome = document.getElementById("nome")
const apelido = document.getElementById("apelido")
const email = document.getElementById("email")
//const idade = document.getElementById("idade")
const data = document.getElementById("data")
const senha = document.getElementById("senha")
const confirmarSenha = document.getElementById("confirmarSenha")

let valido = true

mensagem.textContent = ""
mensagem.className = ""

//document.getElementById('data').addEventListener('input', function(e) {
  //  let v = e.target.value;

    //v = v.replace(/\D/g, "");

    //if (v.length > 2) v = v.slice(0,2) + "/" + v.slice(2);
    //if (v.length > 5) v = v.slice(0,5) + "/" + v.slice(5,9);

    //e.target.value = v;
//});

  
const campos = [nome,apelido,email,data,senha,confirmarSenha]

campos.forEach(campo => campo.classList.remove("erro"))

if(nome.value.length < 10){

nome.classList.add("erro")
valido = false

}

if(apelido.value.length < 3){

apelido.classList.add("erro")
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

if(data.value < 18){

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
