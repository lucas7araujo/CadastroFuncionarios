const api = 'http://localhost:3000/funcionarios';

async function carregarNomes() {
    const nomeSelecionado = document.getElementById('nome');

    try {
        const resposta = await fetch(api);
        if (!resposta.ok) throw new Error('Erro ao buscar nomes');

        const funcionarios = await resposta.json();

        const nomesUnicos = [...new Set(funcionarios.map(f => f.nome))].sort();

        nomesUnicos.forEach(nome => {
            const option = document.createElement('option');
            option.value = nome;
            option.textContent = nome;
            selectNome.appendChild(option);
        });

    } catch (error) {
        console.error('Erro ao carregar nomes: ', error.message)
    }
}
document.addEventListener('DOMContentLoaded', carregarNomes);
