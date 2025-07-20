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
            nomeSelecionado.appendChild(option);
        });

    } catch (error) {
        console.error('Erro ao carregar nomes: ', error.message);
    }
}

async function deletarFuncionario() {
    const nomeSelecionado = document.getElementById('nome').value;

    if (!nomeSelecionado) {
        alert('Selecione um nome para deletar.');
        return;
    }

    try {
        const resposta = await fetch(api);
        const funcionarios = await resposta.json();

        // Filtra todos com o nome selecionado (caso haja duplicatas)
        const funcionariosParaDeletar = funcionarios.filter(f => f.nome === nomeSelecionado);

        if (funcionariosParaDeletar.length === 0) {
            alert('Funcionário não encontrado.');
            return;
        }

        for (const funcionario of funcionariosParaDeletar) {
            await fetch(`${api}/${funcionario.id}`, { method: 'DELETE' });
        }

        alert('Funcionário(s) deletado(s) com sucesso!');
        location.reload(); // atualiza a página para recarregar o select

    } catch (error) {
        console.error('Erro ao deletar: ', error.message);
    }
}

document.addEventListener('DOMContentLoaded', carregarNomes);
document.getElementById('botao-deletar').addEventListener('click', deletarFuncionario);
