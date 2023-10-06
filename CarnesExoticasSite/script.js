/* Parte do cógico responsável pelos botões de rádio criados manualmente */
const radios = document.getElementsByClassName("radioButtons");

for (let i = 0; i < radios.length; i++) {
  radios[i].onclick = function() {
    this.classList.add("escolhido");
    if (i == 0) {
      radios[1].classList.remove("escolhido");
      radios[2].classList.remove("escolhido");
    } else if (i == 1) {
      radios[0].classList.remove("escolhido");
      radios[2].classList.remove("escolhido");
    } else if (i == 2) {
      radios[0].classList.remove("escolhido");
      radios[1].classList.remove("escolhido");
    }
  }
}

/* Parte do cógico responsável pelas checkboxes criadas manualmente */
const checks = document.getElementsByClassName("checkbox");

for (let i = 0; i < checks.length; i++) {
  checks[i].onclick = function() {
    if (i == 2) {
      if (checks[0].classList.contains("escolhido") && !checks[1].classList.contains("escolhido")) {
        checks[1].classList.toggle("escolhido");
        checks[2].classList.toggle("escolhido");
      } else if (checks[1].classList.contains("escolhido") && !checks[0].classList.contains("escolhido")) {
        checks[0].classList.toggle("escolhido");
        checks[2].classList.toggle("escolhido");
      } else {
        checks[0].classList.toggle("escolhido");
        checks[1].classList.toggle("escolhido");
        checks[2].classList.toggle("escolhido");
      }
    } else if (i == 0) {
      checks[0].classList.toggle("escolhido");
      if (checks[1].classList.contains("escolhido")) {
        checks[2].classList.toggle("escolhido");
      }
    } else if (i == 1) {
      checks[1].classList.toggle("escolhido");
      if (checks[0].classList.contains("escolhido")) {
        checks[2].classList.toggle("escolhido");
      }
    }
  }
}

/* código responsável pela criação e funcionalidades do Menu Select/Dropdown localizado no formulário */
const botaoDropdown = document.getElementById("botaoDropdown");
const menuDropdown = document.getElementById("divDropdown");
const rodaArrow = document.getElementById("arrow");
const opcao = document.getElementsByClassName("itemsDropdown");
const textoDoBotao = document.querySelector(".textoDoBotao");

function mostrarMenu() {
  menuDropdown.classList.toggle("aparecer");
  rodaArrow.classList.toggle("arrow");
}

botaoDropdown.addEventListener("click", mostrarMenu);

for (let i = 0; i < opcao.length; i++) {
  opcao[i].onclick = function() {
    textoDoBotao.innerText = this.innerText;
    mostrarMenu();
  }
}

// Funções de verificação
function checkMarcado() {
    const radios = document.getElementsByClassName("radioButtons");
    if (!radios[0].classList.contains("escolhido") && !radios[1].classList.contains("escolhido") && !radios[2].classList.contains("escolhido")) {
      alert("Escolha sua preferencia");
    }
    const checks = document.getElementsByClassName("checkbox");
    if (!checks[0].classList.contains("escolhido") && !checks[1].classList.contains("escolhido") && !checks[2].classList.contains("escolhido")) {
      alert("Escolha uma forma para contato");
    }
    const textoDoBotao = document.querySelector(".textoDoBotao");
    if (textoDoBotao.innerHTML === "Tipo de carne favorita") {
      alert("Escolha a sua carne favorita");
    }
  }

function checkNome(){
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  const nome = document.querySelector("#nome").value;
  if(!regName.test(nome)){
    alert("Nome inválido");
  }else{
    
  }
}

function checkEmail(){
  const email = document.getElementById("email");
  const filter1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!filter1.test(email.value)) {
      alert("Por favor, digite um email válido.");
  }
}

function checkTel(){
  const telefone = document.getElementById("telefone");
  const filter2 = /^[0-9]+$/;
  if (!filter2.test(telefone.value) || (telefone.value).length !== 11) {
    alert("Por favor, digite um telefone que contenha apenas números e com 11 dígitos.");
  }
}

function checkMensagem(){
  const mensagem = document.getElementById("mensagem");
  if((mensagem.value).length < 5){
    alert("Sua mensagem deve ter pelo menos 5 caracteres.")
  }
}

function checksTudo(){
  checkMarcado();
  checkTel();
  checkEmail();
  checkNome();
  checkMensagem();
}