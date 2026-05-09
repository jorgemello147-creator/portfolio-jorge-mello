// Menu responsivo: abre e fecha o menu em telas menores
const botaoMenu = document.getElementById("botaoMenu");
const linksMenu = document.getElementById("linksMenu");

botaoMenu.addEventListener("click", () => {
  linksMenu.classList.toggle("ativo");
});

// Alternância de tema claro/escuro usando JavaScript
const botaoTema = document.getElementById("alternarTema");

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("tema-escuro");

  if (document.body.classList.contains("tema-escuro")) {
    botaoTema.textContent = "Tema claro";
  } else {
    botaoTema.textContent = "Tema escuro";
  }
});

// Validação do formulário de contato
const formulario = document.getElementById("formularioContato");
const retorno = document.getElementById("mensagemRetorno");

function emailValido(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return padraoEmail.test(email);
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  retorno.className = "mensagem-retorno";

  if (nome === "" || email === "" || mensagem === "") {
    retorno.textContent = "Erro: preencha todos os campos antes de enviar.";
    retorno.classList.add("erro");
    return;
  }

  if (!emailValido(email)) {
    retorno.textContent = "Erro: informe um e-mail válido.";
    retorno.classList.add("erro");
    return;
  }

  formulario.reset();
  retorno.textContent = "Mensagem enviada com sucesso!";
  retorno.classList.add("sucesso");

  alert("Mensagem enviada com sucesso!");
});
