const apiURL = "http://localhost:3000/usuarios";

document.querySelector("form")?.addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("e-mail").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    try {
        const response = await fetch(`${apiURL}?email=${email}&senha=${senha}`);
        const data = await response.json();

        if (data.length === 1) {
            alert("Login realizado com sucesso!");
            window.location.href = "Index.html";
        } else {
            alert("E-mail ou senha incorretos.");
        }
    } catch (error) {
        console.error("Erro ao tentar logar:", error);
        alert("Erro ao realizar login. Tente novamente mais tarde.");
    }
});
