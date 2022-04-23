/* var - variavel de escopo global 
   let - variavel de escopo local
   const - é de escopo global mas é uma variável constante, não muda seu valor ao decorrer*/

   /* Acessos:
   por tag- getElementByTagName()
   por Id - getElementById()
   por nome - getElementsByName()
   por classe - getElementsByClassName()
   por seletor - querySelector() - melhor prática pra acessar o DOM no JS.
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let assuntoOk = false



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

/* function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
    }
}*/ 

function validaEmail(){
    let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/


    if(email.value.match(regex)){
        txtEmail.innerHTML = "Email válido"
        email.style.color = "green"
        emailOk = true
    }else{
        txtEmail.innerHTML = "Email inválido"
        email.style.color = "red"
    }
}
//colocar um contador de caracteres
function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    if (assunto.value.length > 100){
        txtMensagem.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else{
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && mensagemOk == true){
        alert ('Formulário enviado com sucesso!')
    }else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}
