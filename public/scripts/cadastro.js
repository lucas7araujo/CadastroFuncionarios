// login.js
const apiUsuarios = "http://localhost:3000/usuarios";


document.getElementById("botao_cadastro")?.addEventListener("click", async (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome_usuario").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("e-mail").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!nome || !telefone || !email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  try {

    const res = await fetch(`${apiUsuarios}?email=${email}`);
    const usuarios = await res.json();

    if (usuarios.length > 0) {
      alert("Esse e-mail já está cadastrado!");
      return;
    }


    const resposta = await fetch(apiUsuarios, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, email, senha })
    });

    if (!resposta.ok) throw new Error("Erro ao cadastrar");

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";

  } catch (error) {
    console.error("Erro:", error);
    alert("Erro ao cadastrar. Tente novamente mais tarde.");
  }
});


