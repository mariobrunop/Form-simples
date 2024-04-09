let btn 
let nome 
let sobrenome 
let campo_estudo
let data_nascimento 

let idade 


function enviar(){
    nome = document.getElementById("nome").value
    sobrenome = document.getElementById("sobrenome").value
    campo_estudo = document.getElementById("campo_estudo").value
    data_nascimento = document.getElementById("ano_nascimento").value

    idade = 2024 - data_nascimento

    window.alert (" Nome: " + nome + " " + sobrenome + "\n\ Campo de Estudo: "
     + campo_estudo + "\n\ Idade: " +idade)
}
