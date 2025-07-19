const api = 'http://localhost:3000/funcionarios';

let funcionarios = []; 
let funcionarioSelecionado = null;

async function carregarNomes() {
    const nomeSelecionado = document.getElementById('nome');

    try {
        const resposta = await fetch(api);
        if (!resposta.ok) throw new Error('Erro ao buscar nomes');

        funcionarios = await resposta.json(); 
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

document.getElementById('nome').addEventListener('change', () => {
    const nomeEscolhido = document.getElementById('nome').value;

    funcionarioSelecionado = funcionarios.find(f => f.nome === nomeEscolhido); 
    if (funcionarioSelecionado) {
        document.getElementById('salario').value = funcionarioSelecionado.salario;
        document.getElementById('cargo').value = funcionarioSelecionado.cargo;
        document.getElementById('contrato').value = funcionarioSelecionado.contrato.toLowerCase();
    }
});

async function atualizarFuncionario(event) {
    event.preventDefault(); 

    if (!funcionarioSelecionado) {
        alert('Selecione um funcionário para atualizar');
        return;
    }

    const id = funcionarioSelecionado.id;

    const dadosAtualizados = {
        ...funcionarioSelecionado,
        salario: document.getElementById('salario').value,
        cargo: document.getElementById('cargo').value,
        contrato: document.getElementById('contrato').value.toUpperCase() 
    };

    try {
        const resposta = await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAtualizados)
        });

        if (!resposta.ok) throw new Error('Erro ao atualizar funcionário');

        alert('Funcionário atualizado com sucesso!');
    } catch (erro) {
        alert('Erro ao atualizar: ' + erro.message);
    }
}

document.addEventListener('DOMContentLoaded', carregarNomes);
document.getElementById('botaoAtualizar').addEventListener('click', atualizarFuncionario);
